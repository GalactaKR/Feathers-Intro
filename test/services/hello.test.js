const assert = require('assert');
const app = require('../../src/app');

describe('\'hello\' service', () => {
  it('registered the service', () => {
    const service = app.service('hello');

    assert.ok(service, 'Registered the service');
  });
});
