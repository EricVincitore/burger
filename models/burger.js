var orm = require("../config/orm.js");

var burger = {
    all: function(dv) {
      orm.all("burgers", function(res) {
        dv(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, dv) {
      orm.create("burgers", cols, vals, function(res) {
        dv(res);
      });
    },
    update: function(objColVals, devoured, dv) {
      orm.update("burgers", objColVals, devoured, function(res) {
        dv(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  