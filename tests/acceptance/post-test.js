import setupAcceptanceTest from '../helpers/setup-acceptance-test';
import {module, test} from 'qunit';
import {visit, currentURL, find} from '@ember/test-helpers';

module('Acceptance | post', function (hooks) {
  setupAcceptanceTest(hooks);

  hooks.beforeEach(function () {
    this.server.create('user');
    this.server.create('post');
  });

  test('visiting /post', async function (assert) {
    await visit('/post/1');

    assert.equal(currentURL(), '/post/1');
    assert.ok(find('[data-test-post-body]'), 'post body should be present');
    assert.ok(find('[data-test-post-comments]'), 'comments block should be present');
  });
});
