import Route from '@ember/routing/route';
import {hash} from 'rsvp';

export default class PostsPostRoute extends Route {
  model(params) {
    const post = this.store.findRecord('post', params.post_id, {include: 'author'});
    const comments = this.store.query('comment', {post_id: params.post_id, include: 'author'});
    return hash({post, comments});
  }
}
