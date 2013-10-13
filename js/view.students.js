var StudentsView = Backbone.View.extend({

  el: ".page",

  events: {
    "click .student-form__submit":  "submitStudent"
  },

  initialize: function() {
    
  },

  renderAll: function() {
    this.$el.html(yr.run("students", { students: db.data.students }));
  },
  
  renderShow: function(id) {
    var student = db.find("students", id);
    this.$el.html(yr.run("student", student));
  },
  
  renderEdit: function(id) {
    var student = db.find("students", id);
    this.$el.html(yr.run("student_edit", student));
  },
  
  submitStudent: function() {
    var form = $(".student-form");
    var id = $("#student-id").val();
    var student = { id: id };
    _(form.serializeArray()).each(function(param) {
      student[param.name] = param.value;
    });
    db.update("students", student);
    App.Router.navigate("/students/" + id, { trigger: true });
  }

});