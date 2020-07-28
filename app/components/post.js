import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { alias } from "@ember/object/computed";

export default class PostComponent extends Component {
  @service session;

  @alias("session.currentUser")
  currentUser;

  @action
  getRecentEmojis() {
    console.log("triggering recent emoji fetch??");
    this.currentUser.recentEmojis;
  }
}
