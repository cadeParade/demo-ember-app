import Route from "@ember/routing/route";

export default class HomeRoute extends Route {
  model() {
    const x = this.store.findAll("user");
    console.log("model hook", x);
    return x;
  }
}
