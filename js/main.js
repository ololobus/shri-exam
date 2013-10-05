App = {};
$(function() {
  db.load();
  App.Router = new Router;
  App.StaticView = new StaticView;
  
  Backbone.history.start();
});