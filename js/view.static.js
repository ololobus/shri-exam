var StaticView = Backbone.View.extend({

  el: ".page",

  events: {
    
  },

  initialize: function() {
    
  },

  renderPage: function(name) {
    this.$el.html(yr.run("static", db.data[name]));
  },
  
  renderSocial: function() {
    this.$el.html("");
  }

});