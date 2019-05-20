'use strict';

var utils = require('../utils/writer.js');
var BoardController = require('../service/BoardControllerService');

module.exports.getBoardUsingGET = function getBoardUsingGET (req, res, next) {
  var boardId = req.swagger.params['boardId'].value;
  BoardController.getBoardUsingGET(boardId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBoardsUsingGET = function getBoardsUsingGET (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  BoardController.getBoardsUsingGET(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newBoardUsingPOST = function newBoardUsingPOST (req, res, next) {
  var cols = req.swagger.params['cols'].value;
  var mines = req.swagger.params['mines'].value;
  var rows = req.swagger.params['rows'].value;
  var userId = req.swagger.params['userId'].value;
  BoardController.newBoardUsingPOST(cols,mines,rows,userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pauseBoardUsingPOST = function pauseBoardUsingPOST (req, res, next) {
  var boardId = req.swagger.params['boardId'].value;
  var userId = req.swagger.params['userId'].value;
  BoardController.pauseBoardUsingPOST(boardId,userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.resumeBoardUsingPOST = function resumeBoardUsingPOST (req, res, next) {
  var boardId = req.swagger.params['boardId'].value;
  var userId = req.swagger.params['userId'].value;
  BoardController.resumeBoardUsingPOST(boardId,userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
