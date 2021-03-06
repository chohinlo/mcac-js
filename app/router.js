import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('group', { path: 'groups/:group_id' }, function() {
    this.resource('bulletin', { path: 'bulletins/:bulletin_id' }, function() {
    });

    this.resource('bulletins', { path: 'bulletins' }, function() {
      this.route('new');
    });
  });
  this.route('bulletin/sunday', { path: '/sunday' }, function() {
  });
});

export default Router;
