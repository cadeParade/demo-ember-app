import Component from '@ember/component';
import {task} from 'ember-concurrency';
import {inject as service} from '@ember/service';

export default Component.extend({
  store: service(),

  post: null,

  init() {
    this._super(...arguments);
    this.set('comments', []);
  },

  didInsertElement() {
    this.fetchComments.perform(this.get('post'));
  },

  // didUpdateAttrs() {
  // something here?
  // }

  fetchComments: task(function* (post) {
    const comments = yield this.get('store').query('comment', {
      post_id: post.id,
      include: 'author',
    });
    this.set('comments', comments);
  }),
});
