import {tagName} from '@ember-decorators/component';
import {action, computed} from '@ember/object';
import {inject as service} from '@ember/service';
import {gt, readOnly} from '@ember/object/computed';
import Component from '@ember/component';
import {task} from 'ember-concurrency';
import {tracked} from '@glimmer/tracking';

@tagName('section')
export default class Comments extends Component {
  @service
  store;

  @tracked isShowMoreExpanded = false;
  @tracked comments = [];

  @readOnly('comments.length')
  commentCount;

  @gt('commentCount', 5)
  isTooManyComments;

  @computed('isTooManyComments', 'isShowMoreExpanded')
  get shouldShowExpandCommentOption() {
    if (this.isTooManyComments && !this.isShowMoreExpanded) return true;
    return false;
  }

  @computed('isTooManyComments', 'isShowMoreExpanded')
  get slicedComments() {
    if (this.isTooManyComments && !this.isShowMoreExpanded) {
      return this.comments.slice(0, 5);
    } else {
      return this.comments;
    }
  }

  @action
  expandComments() {
    this.isShowMoreExpanded = true;
  }

  didInsertElement() {
    this.fetchComments.perform(this.post);
  }

  @task(function* (post) {
    const comments = yield this.store.query('comment', {
      post_id: post.id,
      include: 'author',
    });
    this.comments = comments;
  })
  fetchComments;
}
