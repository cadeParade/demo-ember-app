import {setupApplicationTest} from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

export default function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
}
