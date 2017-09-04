import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    if (params.id === '1') {
      return {
        id: '1',
        task: 'Record videos',
      }
    } else {
      return {
        id: '2',
        task: 'Pay taxes',
      }
    }
  }
});
