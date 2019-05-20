'use strict';


/**
 * createUser
 *
 * uname String uname
 * returns ResponseDTO
 **/
exports.createUserUsingPOST = function(uname) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

