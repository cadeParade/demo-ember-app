import Route from '@ember/routing/route';

export default class PostsPostRoute extends Route {
  model(params) {
    return this.store.findRecord('post', params.post_id, {include: 'author'});
  }

  setupController(controller, post) {
    controller.setProperties({
      post,
      currentUser: {avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/gt/128.jpg'},
      // comments: this.fetchComments.perform(post),
    });
  }
}
