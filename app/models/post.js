import Model, { attr } from "@ember-data/model";

export default class PostModel extends Model {
  @attr name;

  @attr body;
}
