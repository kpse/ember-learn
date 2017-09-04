import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('parent', function() {
    this.route('child');
  });
  this.route('todos', function() {
    this.route('show', {path: '/:id'});
  });
});

export default Router;
