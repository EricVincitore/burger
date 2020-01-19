var connection = require("./connection.js");

var orm = {
    selectAll: function(menu) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [menu], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(menu, colToSearch, valOfCol) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
  
      console.log(queryString);
  
      connection.query(queryString, [menu, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
      var queryString = "SELECT ?? FROM ?? ";
  
      console.log(queryString);
  
      connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
        err,
        result
      ) {
        if (err) throw err;
        console.log(result);
      });
    }
};
  
module.exports = orm;
  