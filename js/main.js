App = {};
$(function() {
  db.load();
  App.Router = new Router;
  App.StaticView = new StaticView;
  App.StudentsView = new StudentsView;
  
  Backbone.history.start();
});