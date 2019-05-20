'use strict';

var utils = require('../utils/writer.js');
var UserController = require('../service/UserControllerService');

module.exports.createUserUsingPOST = function createUserUsingPOST (req, res, next) {
  var uname = req.swagger.params['uname'].value;
  UserController.createUserUsingPOST(uname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
