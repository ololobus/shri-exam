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
    this.$el.html(yr.run("static", db.data["social"]));
    VK.Widgets.Group("vk_groups1", {mode: 0, wide: 1, width: "300", height: "400", color1: "FFFFFF", color2: "2B587A", color3: "939393"}, 58259761);
    VK.Widgets.Group("vk_groups2", {mode: 2, wide: 1, width: "430", height: "400", color1: "FFFFFF", color2: "2B587A", color3: "939393"}, 58259761);
    $("#twitter-wjs").remove();
    !function(d,s,id){
      var js,
          fjs = d.getElementsByTagName(s)[0],
          p = /^http:/.test(d.location) ? "http" : "https";
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js,fjs);
      };
    }(document,"script","twitter-wjs");
  }

});