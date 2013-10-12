var LecturesView = Backbone.View.extend({

  el: ".page",

  events: {
    "click .lecture__comments__write":        "toggleNewCommentForm",
    "click .lecture__comments__new__submit":  "submitComment"
  },

  initialize: function() {
    
  },

  renderAll: function() {
    var lectures = $.map(db.data.lectures, function(l, i) {
      l.lector = _(db.find("lectors", l.lector_id)).clone();
      var lector_name = l.lector.name;
      l.lector.name = { first_char: lector_name[0], last_chars: lector_name.slice(1) };
      return l;
    });
    this.$el.html(yr.run("lectures", { lectures: lectures }));
  },
  
  renderShow: function(id) {
    var lecture = db.find("lectures", id);
    var lector = db.find("lectors", lecture.lector_id);
    this.$el.html(yr.run("lecture", { lecture: lecture, lector: lector }));
  },
  
  toggleNewCommentForm: function() {
    $(".lecture__comments__new").slideToggle();
  },
  
  submitComment: function() {
    
  }

});