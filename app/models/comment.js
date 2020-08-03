import Model, {attr, belongsTo} from '@ember-data/model';

export default class CommentModel extends Model {
  @attr body;

  @belongsTo('user')
  author;

  @belongsTo('post')
  post;
}
