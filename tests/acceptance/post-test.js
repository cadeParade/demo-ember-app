import setupAcceptanceTest from '../helpers/setup-acceptance-test';
import {module, test} from 'qunit';
import {visit, currentURL, find, waitUntil, settled} from '@ember/test-helpers';

module('Acceptance | post', function (hooks) {
  setupAcceptanceTest(hooks);

  hooks.beforeEach(function () {
    this.server.create('user');
    this.server.create('post');
  });

  test('visiting /post', async function (assert) {
    visit('/post/1');

    await waitUntil(() => find('[data-test-comments-loading]'));
    assert.ok(find('[data-test-comments-loading]'), 'comment loader should be present');

    await settled();

    assert.equal(currentURL(), '/post/1');
    assert.ok(find('[data-test-post-body]'), 'post body should be present');
    assert.ok(find('[data-test-post-comments]'), 'comments block should be present');
  });
});
