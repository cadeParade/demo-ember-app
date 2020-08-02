import {Factory} from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  name: () => `${faker.name.firstName()} ${faker.name.lastName()}`,
  avatarUrl: () => faker.image.avatar(),
});
