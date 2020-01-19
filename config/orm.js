var connection = require("./connection.js");

var orm = {
    selectAll: function(menu) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [menu], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(menu, newItem) {
      var queryString = "INSERT INTO ?? VALUES ??";
  
      console.log(queryString);
  
      connection.query(queryString, [menu, newItem], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(menu, newValue) {
      var queryString = "UPDATE ? SET ?";
  
      console.log(queryString);
  
      connection.query(queryString, [menu, newValue], function(
        err,
        result
      ) {
        if (err) throw err;
        console.log(result);
      });
    }
};
  
module.exports = orm;
  