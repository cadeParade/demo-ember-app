import {inject as service} from '@ember/service';
import Component from '@ember/component';
import {task} from 'ember-concurrency';
import {tracked} from '@glimmer/tracking';

export default class Comments extends Component {
  @service
  store;

  post = null;
  @tracked comments;

  constructor() {
    super(...arguments);
    this.comments = [];
  }

  didInsertElement() {
    this.fetchComments.perform(this.post);
  }

  // didUpdateAttrs() {
  // something here?
  // }

  @task(function* (post) {
    const comments = yield this.store.query('comment', {
      post_id: post.id,
      include: 'author',
    });
    this.comments = comments;
  })
  fetchComments;
}
