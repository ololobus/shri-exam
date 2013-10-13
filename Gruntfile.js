module.exports = function (grunt) {
  grunt.initConfig({
    srcDir: "src",
    tgtDir: ".",

    pkg: grunt.file.readJSON("package.json"),

    env: {
      development: { ENV: "development" },
      production: { ENV: "production" }
    },

    clean: {
      target: [
        "<%=tgtDir%>/js",
        "<%=tgtDir%>/css",
        "<%=tgtDir%>/db",
        "<%=tgtDir%>/images",
        "<%=tgtDir%>/index.html",
        "<%=tgtDir%>/test.html"
      ]
    },

    copy: {
      html: {
        files: [{
          expand: true,
          cwd: "<%=srcDir%>/",
          src: ["test.html"],
          dest: "<%=tgtDir%>/"
        }]
      },
      css: {
        files: [{
          expand: true,
          cwd: "<%=srcDir%>/css/",
          src: ["**"],
          dest: "<%=tgtDir%>/css/"
        }]
      },
      js: {
        files: [{
          expand: true,
          cwd: "<%=srcDir%>/js/",
          src: ["**"],
          dest: "<%=tgtDir%>/js/"
        }]
      },
      db: {
        files: [{
          expand: true,
          cwd: "<%=srcDir%>/db/",
          src: ["*"],
          dest: "<%=tgtDir%>/db/"
        }]
      },
      img: {
        files: [{
          expand: true,
          cwd: "<%=srcDir%>/images/",
          src: ["**"],
          dest: "<%=tgtDir%>/images/"
        }]
      }
    },

    cssmin: {
      css: {
        src: "<%=srcDir%>/css/*.css",
        dest: "<%=tgtDir%>/css/application.css"
      }
    },

    uglify: {
      js: {
        src: [
          "<%=srcDir%>/js/lib/jquery-2.0.3.js",
          "<%=srcDir%>/js/lib/underscore-1.5.2.js",
          "<%=srcDir%>/js/lib/backbone-1.0.0.js",
          "<%=srcDir%>/js/lib/yate.js",
          "<%=srcDir%>/js/templates/*.js",
          "<%=srcDir%>/js/main.js",
          "<%=srcDir%>/js/dbms.js",
          "<%=srcDir%>/js/router.js",
          "<%=srcDir%>/js/view.static.js",
          "<%=srcDir%>/js/view.students.js",
          "<%=srcDir%>/js/view.lectors.js",
          "<%=srcDir%>/js/view.lectures.js",

          "!<%=tgtDir%>/js/application.js"
        ],
        dest: "<%=tgtDir%>/js/application.js"
      }
    },

    preprocess: {
      html : {
        src : "<%=srcDir%>/index.html",
        dest : "<%=tgtDir%>/index.html"
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-env");
  grunt.loadNpmTasks("grunt-preprocess");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("development", [
    "clean:target", "env:development", "preprocess:html",
    "copy:css", "copy:js", "copy:img", "copy:db", "copy:html"
  ]);
  grunt.registerTask("production", [
    "clean:target", "env:production", "preprocess:html",
    "cssmin:css", "uglify:js", "copy:img", "copy:db"
  ]);
};