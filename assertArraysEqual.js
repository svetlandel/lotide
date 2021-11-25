const eqArrays = require('./eqArrays');

    function assertArrayEqual (array1, array2) {
        if (eqArrays(array1, array2)===true) {
          console.log("Arrays match: " + "array#1: ["+ array1 +  "] " + "array#2: [" + array2 + "]");
        } else {
          console.log("Arrays do not match: " + "array#1: ["+ array1 + "] " + " array#2: ["+ array2 + "]");
        }
      };
      module.exports = assertArrayEqual;