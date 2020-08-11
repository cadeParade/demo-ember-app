import {Factory, association} from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  body: () => faker.lorem.paragraphs(3),
  name: () => faker.lorem.sentence(),
  createdAt: () => faker.date.past(),
  author: association(),

  afterCreate(post, server) {
    server.createList('comment', 5, {post});
  },
});
