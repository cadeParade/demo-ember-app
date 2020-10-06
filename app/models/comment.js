import DS from 'ember-data';
import Commentable from 'ember-playground/mixins/commentable';

export default DS.Model.extend(Commentable, {
  body: DS.attr(),

  author: DS.belongsTo('user'),
  post: DS.belongsTo('post'),
});
