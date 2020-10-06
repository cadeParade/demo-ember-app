import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import {task} from 'ember-concurrency';

@classic
export default class Comments extends Component {
  @service
  store;

  post = null;

  init() {
    super.init(...arguments);
    this.set('comments', []);
  }

  didInsertElement() {
    this.fetchComments.perform(this.get('post'));
  }

  // didUpdateAttrs() {
  // something here?
  // }

  @task(function* (post) {
    const comments = yield this.get('store').query('comment', {
      post_id: post.id,
      include: 'author',
    });
    this.set('comments', comments);
  })
  fetchComments;
}
