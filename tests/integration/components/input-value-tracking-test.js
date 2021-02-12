import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { blur, fillIn, find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | input-value-tracking', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<InputValueTracking />`);
    await fillIn('input', 'Person');
    await blur('input');

    assert.equal(find('input').value, '', 'should be empty');
  });
});
