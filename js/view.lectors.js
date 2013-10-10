var LectorsView = Backbone.View.extend({

  el: ".page",

  events: {
    
  },

  initialize: function() {
    
  },

  renderAll: function() {
    this.$el.html(yr.run("lectors", { lectors: db.data.lectors }));
  },
  
  renderShow: function(id) {
    var lector = db.find("lectors", id);
    this.$el.html(yr.run("lector", lector));
  }

});