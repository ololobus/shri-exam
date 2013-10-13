db = {
  
  name: null,
  data: null,
  table_names: ["students", "lectors", "lectures", "comments"],
  no_data: true,
  max_ids: {},
  
  /**
   * Загрузка данных в локальную БД.
   * @param {object} db_data Данные с сервера.
   * @returns {boolean}
   */
  load: function(db_data) {
    if (db_data) {
      this.name = db_data.name;
      this.table_names = db_data.table_names;
      if (localStorage) {
        var local_db = localStorage.getItem(this.name);
      };
      if (local_db) {
        local_db = JSON.parse(local_db);
        this.data = local_db.data;
        this.max_ids = local_db.max_ids;
        console.log("App data loaded from localStorage");
        delete(db_data);
      } else {
        this.data = db_data.data;
        var self = this;
        _(this.table_names).each(function(t) {
          var max = _(self.data[t]).max(function(record) { return record.id });
          self.max_ids[t] = _(max).isNumber() ? 0 : max.id;
        });
        console.log("App data loaded from server dump");
        this.write();
      };
      this.no_data = false;
      return true;
    } else {
      console.log("No app data loaded");
      return false;
    };
  },
  
  /**
   * Записывает локальную БД в localStorage.
   * @returns {boolean}
   */
  write: function() {
    if (localStorage) {
      localStorage.setItem(this.name, JSON.stringify( { data: this.data, max_ids: this.max_ids, timestamp: (new Date().getTime()) } ));
      console.log("Local db writed");
      return true;
    } else {
      consloe.log("LocalStorage is not supported");
      return false;
    };
  },
  
  /**
   * Проверяет наличие таблицы в БД.
   * @param {string} table_name Название таблицы.
   * @returns {boolean}
   */
  tableExists: function(table_name) {
    return _(this.table_names).contains(table_name);
  },
  
  /**
   * Поиск в БД по ключу.
   * @param {string} table_name Название таблицы.
   * @param value Значение.
   * @param {string} column Колонка.
   * @returns {object} Первая найденная запись.
   */
  find: function(table_name, value, column) {
    var column = typeof(column) !== "undefined" ? column : "id";
    if (this.tableExists(table_name)) {
      var record = _(this.data[table_name]).find(function(r) {
        return r[column] == value;
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
  
  /**
   * Поиск в БД по набору ключей.
   * @param {string} table_name Название таблицы.
   * @param {object} keys Хэш из ключей.
   * @returns {object} Все найденные записи.
   */
  where: function(table_name, keys) {
    if (this.tableExists(table_name)) {
      return _(this.data[table_name]).where(keys);
    };
  },
  
  /**
   * Удаление из БД по id.
   * @param {string} table_name Название таблицы.
   * @param id ID записи.
   * @returns {boolean}
   */
  destroy: function(table_name, id) {
    if (this.tableExists(table_name)) {
      this.data[table_name] = _(this.data[table_name]).filter(function(record) {
        return record.id != id;
      });
      return this.write();
    };
  },
  
  /**
   * Обновление записи в БД.
   * @param {string} table_name Название таблицы.
   * @param {object} object Измененная запись.
   * @returns {boolean}
   */
  update: function(table_name, object) {
    if (this.tableExists(table_name)) {
      var old_record = this.find(table_name, object.id);
      _(_(object).pairs()).each(function(value) {
        old_record[value[0]] = value[1];
      });
      return this.write();
    };
  },
  
  /**
   * Создание записи в БД.
   * @param {string} table_name Название таблицы.
   * @param {object} object Новая запись.
   * @returns {boolean}
   */
  insert: function(table_name, item) {
    if (this.tableExists(table_name)) {
      this.max_ids[table_name] += 1;
      item.id = this.max_ids[table_name];
      this.data[table_name].push(item);
      return this.write();
    };
  }
  
};