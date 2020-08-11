import {setupApplicationTest} from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import faker from 'faker';

export default function (hooks) {
  faker.seed(1230);

  setupApplicationTest(hooks);
  setupMirage(hooks);
}
