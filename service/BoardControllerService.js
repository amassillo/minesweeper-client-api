'use strict';


/**
 * getBoard
 *
 * boardId Long boardId
 * userId Long userId (optional)
 * returns ResponseDTO
 **/
exports.getBoardUsingGET = function(boardId,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * getBoards
 *
 * user_id Long user_id
 * returns ResponseDTO
 **/
exports.getBoardsUsingGET = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * newBoard
 *
 * cols Integer cols
 * mines Integer mines
 * rows Integer rows
 * userId Long userId
 * returns ResponseDTO
 **/
exports.newBoardUsingPOST = function(cols,mines,rows,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * pauseBoard
 *
 * boardId Long boardId
 * userId Long userId
 * returns ResponseIdsDTO
 **/
exports.pauseBoardUsingPOST = function(boardId,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * resumeBoard
 *
 * boardId Long boardId
 * userId Long userId
 * returns ResponseIdsDTO
 **/
exports.resumeBoardUsingPOST = function(boardId,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

