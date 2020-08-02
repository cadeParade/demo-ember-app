import Model, {attr, hasMany} from '@ember-data/model';

export default class UserModel extends Model {
  @attr name;
  @attr avatarUrl;

  @hasMany('emoji')
  recentEmojis;
}
