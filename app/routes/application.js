import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class HomeRoute extends Route {
  @service session;

  model() {
    return this.store.find('user', 1).then(user => {
      this.session.set('currentUser', user);
      return user;
    });
  }
}
