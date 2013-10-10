var StudentsView = Backbone.View.extend({

  el: ".page",

  events: {
    
  },

  initialize: function() {
    
  },

  renderAll: function() {
    this.$el.html(yr.run("students", { students: db.data.students }));
  },
  
  renderShow: function(id) {
    var student = db.find("students", id);
    this.$el.html(yr.run("student", student));
  }

});