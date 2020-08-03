import setupAcceptanceTest from '../helpers/setup-acceptance-test';
import {module, test} from 'qunit';
import {visit, currentURL, find, waitUntil, settled} from '@ember/test-helpers';
import {defer} from 'rsvp';

module('Acceptance | post', function (hooks) {
  setupAcceptanceTest(hooks);

  hooks.beforeEach(function () {
    this.server.create('user');
    this.server.create('post');
  });

  test('visiting /post', async function (assert) {
    const deferred = defer();
    let wasCommentQueryCalled = false;

    this.server.get('comments', async (schema, request) => {
      wasCommentQueryCalled = true;
      await deferred.promise;

      const post = schema.posts.find(request.queryParams.post_id);
      return post.comments;
    });

    // Do not await
    visit('/post/1');

    await waitUntil(() => wasCommentQueryCalled);
    assert.ok(find('[data-test-comments-loading]'), 'comments should show loading state');

    await deferred.resolve();
    await settled();

    assert.equal(currentURL(), '/post/1');
    assert.ok(find('[data-test-post-body]'), 'post body should be present');
    assert.ok(find('[data-test-post-comments]'), 'comments block should be present');
  });
});
