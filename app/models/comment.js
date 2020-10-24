import classic from 'ember-classic-decorator';
import Model, {attr, belongsTo} from '@ember-data/model';
import Commentable from 'ember-playground/mixins/commentable';

// Remove @classic when able to refactor away from Commentable mixin.
@classic
export default class Comment extends Model.extend(Commentable) {
  @attr()
  body;

  @belongsTo('user')
  author;

  @belongsTo('post')
  post;
}
