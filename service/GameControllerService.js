'use strict';


/**
 * clickCell
 *
 * boardId Long boardId
 * col Integer col
 * row Integer row
 * user_id Long user_id
 * returns ResponseDTO
 **/
exports.clickCellUsingPOST = function(boardId,col,row,user_id) {
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
 * flagCell
 *
 * boardId Long boardId
 * col Integer col
 * flag String flag
 * row Integer row
 * user_id Long user_id
 * returns ResponseDTO
 **/
exports.flagCellUsingPOST = function(boardId,col,flag,row,user_id) {
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
 * unflagCell
 *
 * boardId Long boardId
 * col Integer col
 * row Integer row
 * returns ResponseDTO
 **/
exports.unflagCellUsingPOST = function(boardId,col,row) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

