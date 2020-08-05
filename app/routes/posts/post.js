import Route from '@ember/routing/route';
import {task} from 'ember-concurrency';

export default class PostsPostRoute extends Route {
  model(params) {
    return this.store.findRecord('post', params.post_id, {include: 'author'});
  }

  setupController(controller, post) {
    controller.setProperties({
      post,
      comments: this.fetchComments.perform(post),
    });
  }

  @task(function* (post) {
    return yield this.store.query('comment', {post_id: post.id, include: 'author'});
  })
  fetchComments;
}
