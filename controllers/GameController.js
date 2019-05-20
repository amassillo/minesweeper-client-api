'use strict';

var utils = require('../utils/writer.js');
var GameController = require('../service/GameControllerService');

module.exports.clickCellUsingPOST = function clickCellUsingPOST (req, res, next) {
  var boardId = req.swagger.params['boardId'].value;
  var col = req.swagger.params['col'].value;
  var row = req.swagger.params['row'].value;
  var userId = req.swagger.params['userId'].value;
  GameController.clickCellUsingPOST(boardId,col,row,userId)
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
  var userId = req.swagger.params['userId'].value;
  GameController.flagCellUsingPOST(boardId,col,flag,row,userId)
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
  var userId = req.swagger.params['userId'].value;
  GameController.unflagCellUsingPOST(boardId,col,row,userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
