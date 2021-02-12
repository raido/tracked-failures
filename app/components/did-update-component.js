import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DidUpdateComponentComponent extends Component {
  @tracked
  isPerson = false;

  @action
  updateState(entity) {
    this.isPerson = entity.kind === 'person';
  }
}
