'use strict';

var utils = require('../utils/writer.js');
var GameController = require('../service/GameControllerService');

module.exports.clickCellUsingPOST = function clickCellUsingPOST (req, res, next) {
  var boardId = req.swagger.params['boardId'].value;
  var col = req.swagger.params['col'].value;
  var row = req.swagger.params['row'].value;
  var user_id = req.swagger.params['user_id'].value;
  GameController.clickCellUsingPOST(boardId,col,row,user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.flagCellUsingPOST = function flagCellUsingPOST (req, res, next) {
  var boardId = req.swagger.params['boardId'].value;
  var col = req.swagger.params['col'].value;
  var flag = req.swagger.params['flag'].value;
  var row = req.swagger.params['row'].value;
  var user_id = req.swagger.params['user_id'].value;
  GameController.flagCellUsingPOST(boardId,col,flag,row,user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unflagCellUsingPOST = function unflagCellUsingPOST (req, res, next) {
  var boardId = req.swagger.params['boardId'].value;
  var col = req.swagger.params['col'].value;
  var row = req.swagger.params['row'].value;
  GameController.unflagCellUsingPOST(boardId,col,row)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
