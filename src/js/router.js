Router = Backbone.Router.extend({
  
  routes: {
    "":                   "about",
    "about":              "about",
    "social":             "social",
    "students":           "students",
    "students/:id":       "student",
    "students/:id/edit":  "student_edit",
    "lectors":            "lectors",
    "lectors/:id":        "lector",
    "lectures":           "lectures",
    "lectures/:id":       "lecture"
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
  
  student_edit: function(id) {
    this.setMenuCurrent("students");
    App.StudentsView.renderEdit(id);
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
    App.LecturesView.renderAll();
  },
  
  lecture: function(id) {
    this.setMenuCurrent("lectures");
    App.LecturesView.renderShow(id);
  },
  
  setMenuCurrent: function(current) {
    $(".menu__item_state_current").removeClass("menu__item_state_current");
    $(".menu__item").filter('[href="#/' + current + '"]').addClass("menu__item_state_current");
  }
  
});