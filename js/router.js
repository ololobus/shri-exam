Router = Backbone.Router.extend({
  
  routes: {
    "":             "about",
    "about":        "about",
    "social":       "social",
    "students":     "students",
    "students/:id": "student",
    "lectors":      "lectors",
    "lectors/:id":  "lector",
    "lectures":     "lectures",
    "lectures/:id": "lecture"
  },
  
  about: function() {
    this.setMenuCurrent("about");
    App.StaticView.renderPage("about");
  },
  
  social: function() {
    this.setMenuCurrent("social");
    App.StaticView.renderSocial();
  },
  
  students: function() {
    this.setMenuCurrent("students");
    App.StudentsView.renderAll();
  },
  
  student: function(id) {
    this.setMenuCurrent("students");
    App.StudentsView.renderShow(id);
  },
  
  lectors: function() {
    this.setMenuCurrent("lectors");
    App.LectorsView.renderAll();
  },
  
  lector: function(id) {
    this.setMenuCurrent("lectors");
    App.LectorsView.renderShow(id);
  },
  
  lectures: function() {
    this.setMenuCurrent("lectures");
  },
  
  lecture: function(id) {
    this.setMenuCurrent("lectures");
  },
  
  setMenuCurrent: function(current) {
    $(".menu__item_state_current").removeClass("menu__item_state_current");
    $(".menu__item").filter('[href="#/' + current + '"]').addClass("menu__item_state_current");
  }
  
});