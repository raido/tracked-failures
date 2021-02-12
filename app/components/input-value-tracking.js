import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class InputValueTrackingComponent extends Component {
  @tracked
  state = {
    inputValue: null,
  };

  @action
  updateState(updates) {
    this.state = { ...this.state, ...updates };
  }

  @action
  resetState() {
    this.updateState({ inputValue: null });
  }
}
