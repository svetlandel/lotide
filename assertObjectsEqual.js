function assertEqual (actual, expected) {
    if (actual === expected) {
      console.log("Assertion Passed: " + actual + "===" + expected);
    } else {
      console.log("Assertion Failed: " + actual + "!==" + expected);
    }
  };

  function eqArrays( array1, array2) {

    if (array1.length !== array2.length)
    {
        return false;
    }else {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i]!== array2[i]){  
                return false;           
        }
            }
                 }
                     return true;
    }
  
    const eqObjects = function(object1, object2) {
      let keys1 = Object.keys(object1);
      let keys2 = Object.keys(object2);
        if (keys1.length!==keys2.length){
            return false;
        }
        for (const key of keys1){
            if(object1[key] !== object2[key]){
                if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
                    return eqArrays(object1[key], object2[key]);              
                }
                    return false;
            }
        }
        return true;
    };

    const assertObjectsEqual = function(actual, expected) {
        const inspect = require('util').inspect;
        if (eqObjects(actual, expected)===true) {
            console.log("Objects match: " + "object 1: ["+ inspect(actual) +  "] " + "object 2: [" + inspect(expected) + "]");
          } else {
            console.log("Objects do not match: " + "object 1: ["+ inspect(actual) + "] " + " object2: ["+ inspect(expected) + "]");
          }
      };