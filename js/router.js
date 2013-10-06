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
    App.StudentsView.renderStudents();
  },
  
  student: function(id) {
    this.setMenuCurrent("students");
    App.StudentsView.renderStudent(id);
  },
  
  lectors: function() {
    this.setMenuCurrent("lectors");
  },
  
  lector: function(id) {
    this.setMenuCurrent("lectors");
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