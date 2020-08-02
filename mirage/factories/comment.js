import {Factory, association} from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  body: () => faker.lorem.sentence(),
  author: association(),
});
