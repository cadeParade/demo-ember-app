import Component from '@ember/component';
import {task} from 'ember-concurrency';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';
import {readOnly, gt} from '@ember/object/computed';

export default Component.extend({
  tagName: 'section',
  store: service(),

  post: null,
  isShowMoreExpanded: false,

  init() {
    this._super(...arguments);
    this.set('comments', []);
  },

  commentCount: readOnly('comments.length'),

  isTooManyComments: gt('commentCount', 5),

  shouldShowExpandCommentOption: computed('isTooManyComments', 'isShowMoreExpanded', function () {
    if (this.isTooManyComments && !this.isShowMoreExpanded) return true;
    return false;
  }),

  slicedComments: computed('isTooManyComments', 'isShowMoreExpanded', function () {
    if (this.isTooManyComments && !this.isShowMoreExpanded) {
      return this.comments.slice(0, 5);
    } else {
      return this.comments;
    }
  }),

  actions: {
    expandComments() {
      this.set('isShowMoreExpanded', true);
    },
  },

  didInsertElement() {
    this.fetchComments.perform(this.get('post'));
  },

  fetchComments: task(function* (post) {
    const comments = yield this.get('store').query('comment', {
      post_id: post.id,
      include: 'author',
    });
    this.set('comments', comments);
  }),
});
