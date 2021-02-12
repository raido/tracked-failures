import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | did-update-component', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    let entity = {
      name: 'John',
      kind: 'person',
    };

    this.set('entity', entity);

    await render(hbs`<DidUpdateComponent @entity={{this.entity}} />`);
    assert.equal(this.element.textContent.trim(), 'Person', 'should be person');

    this.set('entity', {
      ...entity,
      kind: 'robot',
    });
    await settled();

    assert.equal(this.element.textContent.trim(), 'Robot', 'should be robot');
  });
});
