import {action} from '@ember/object';
import {inject as service} from '@ember/service';
import Component from '@glimmer/component';
import {task} from 'ember-concurrency';
import {tracked} from '@glimmer/tracking';

export default class Comments extends Component {
  @service store;

  @tracked isShowMoreExpanded = false;
  @tracked comments = [];

  get allowNewComments() {
    return this.args.allowNewComments || false;
  }

  get commentCount() {
    return this.comments.length;
  }

  get isTooManyComments() {
    return this.commentCount > 5;
  }

  get shouldShowExpandCommentOption() {
    if (this.isTooManyComments && !this.isShowMoreExpanded) return true;
    return false;
  }

  get slicedComments() {
    if (this.isTooManyComments && !this.isShowMoreExpanded) {
      return this.comments.slice(0, 5);
    } else {
      return this.comments;
    }
  }

  @action expandComments() {
    this.isShowMoreExpanded = true;
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
