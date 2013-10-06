var StudentsView = Backbone.View.extend({

  el: ".page",

  events: {
    
  },

  initialize: function() {
    
  },

  renderStudents: function() {
    this.$el.html(yr.run("students", { students: db.data.students }));
  },
  
  renderStudent: function(id) {
    var student = db.find("students", id);
    this.$el.html(yr.run("student", student));
  }

});