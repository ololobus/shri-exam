window.onload = function() {
  
  test( "DB server data available", function() {
    ok( typeof(db_data) !== "undefined", "Passed!" );
  });
  
  test( "DB data load test", function() {
    db.data = null;
    ok( db.load(db_data), "Passed!" );
  });
  
  test( "DB localStorage write test", function() {
    ok( db.write(), "Passed! writed to localStorage" );
  });
  
  test( "DB table exists check test", function() {
    ok( db.tableExists(db.table_names[0]), "Passed! real table name" );
    ok( !db.tableExists("sdkjfhsdjkhfgjkdfbshfoiwhfownejfsmfkjae"), "Passed! fake table name" );
  });
  
  test( "DB find test", function() {
    ok( db.find("students", 1) !== null, "Passed! find by existing id" );
    ok( db.find("students", -1) === null, "Passed! find by fake id" );
    ok( db.find("students", "Москва", "city") !== null, "Passed! find by other field" );
  });
  
  test( "DB where test", function() {
    ok( db.where("students", { city: "Москва" }).length !== 0, "Passed!" );
  });
  
  test( "DB insert/update/destroy test", function() {
    var item = { text: "test text", author: "tester" };
    item = db.insert("comments", item);
    ok( item.id && db.find("comments", item.id) !== null, "Passed! insert" );
    item.text = "new test text";
    db.update("comments", item);
    ok( db.find("comments", item.id).text === "new test text", "Passed! update" );
    db.destroy("comments", item.id);
    ok( db.find("comments", item.id) === null, "Passed! destroy" );
  });
  
};