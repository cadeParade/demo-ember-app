import classic from 'ember-classic-decorator';
import Commentable from 'ember-playground/mixins/commentable';
import Model, {attr, belongsTo} from '@ember-data/model';

@classic
export default class Comment extends Model.extend(Commentable) {
  @attr()
  body;

  @belongsTo('user')
  author;

  @belongsTo('post')
  post;
}
