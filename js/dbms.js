dbms = {
  
  name: null,
  data: null,
  table_names: ["students", "lectors", "lectures"],
  no_data: true,
  
  load: function() {
    if (database) {
      this.name = database.name;
      var local_db = localStorage.getItem(this.name);
      if (local_db) {
        this.data = JSON.parse(local_db).data;
        console.log("App data loaded from localStorage");
      } else {
        this.data = database.data;
        console.log("App data loaded from server dump");
      };
      this.no_data = false;
      return true;
    } else {
      console.log("No app data loaded");
      return false;
    };
  },
  
  write: function() {
    if (localStorage) {
      localStorage.setItem(this.name, JSON.stringify( { data: this.data, timestamp: (new Date().getTime()) } ));
      console.log("Local db created");
    } else {
      consloe.log("LocalStorage is not supported");
    };
  },
  
  tableExists: function(table_name) {
    return typeof($.inArray(table_name, this.table_names)) === "number";
  },
  
  find: function(table_name, value, column) {
    column = typeof(column) !== "undefined" ? column : "id";
    if (this.tableExists(table_name)) {
      var record = false;
      $.each(this.data[table_name], function(index, item) {
        if (item[column] == value) {
          record = item;
          return false;
        };
      });
      if (record) {
        return record;
      } else {
        return null;
      };
    } else {
      return null;
    };
  },
  
  insert: function(table_name, item) {
    
  }
  
};