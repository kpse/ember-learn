import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: '1',
        task: 'Record videos',
      },{
        id: '2',
        task: 'Pay taxes',
      }
    ]
  }
});
