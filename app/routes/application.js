import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class HomeRoute extends Route {
  @service session;

  model() {
    const user = this.store.find("user", 1);
    this.session.set("currentUser", user);
    return user;
  }
}
