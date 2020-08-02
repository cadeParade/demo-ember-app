import {Factory, association} from 'ember-cli-mirage';
import faker from 'faker';
import _ from 'lodash';

export default Factory.extend({
  body: () => faker.lorem.paragraphs(3),
  name: () => faker.lorem.sentence(),
  createdAt: () => faker.date.past(),
  author: association(),

  afterCreate(post, server) {
    server.createList('comment', _.random(1, 5, false), {post});
  },
});
