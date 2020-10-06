import Route from '@ember/routing/route';

export default class PostsPostRoute extends Route {
  model(params) {
    return this.store.findRecord('post', params.post_id, {include: 'author'});
  }

  setupController(controller, post) {
    controller.setProperties({
      post,
      // comments: this.fetchComments.perform(post),
    });
  }
}
