import Model, {attr, hasMany, belongsTo} from '@ember-data/model';
import {computed} from '@ember/object';

export default class PostModel extends Model {
  @attr name;

  @attr body;

  @attr createdAt;

  @hasMany('comments')
  comments;

  @belongsTo('user')
  author;

  @computed('body')
  get blurb() {
    return this.body.split(' ').slice(0, 20).join(' ');
  }

}
