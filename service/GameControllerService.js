'use strict';


/**
 * clickCell
 *
 * boardId Long boardId
 * col Integer col
 * row Integer row
 * userId Long userId (optional)
 * returns ResponseDTO
 **/
exports.clickCellUsingPOST = function(boardId,col,row,userId) {
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
 * userId Long userId (optional)
 * returns ResponseDTO
 **/
exports.flagCellUsingPOST = function(boardId,col,flag,row,userId) {
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
 * userId Long userId (optional)
 * returns ResponseDTO
 **/
exports.unflagCellUsingPOST = function(boardId,col,row,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

