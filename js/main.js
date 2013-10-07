App = {};
$(function() {
  db.load();
  App.Router = new Router;
  App.StaticView = new StaticView;
  App.StudentsView = new StudentsView;
  App.LectorsView = new LectorsView;
  
  Backbone.history.start();
});