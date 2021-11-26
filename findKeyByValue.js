function assertEqual (actual, expected) {
    if (actual === expected) {
      console.log("Assertion Passed: " + actual + "===" + expected);
    } else {
      console.log("Assertion Failed: " + actual + "!==" + expected);
    }
  };

 function findKeyByValue(obj, search_value){
     for(let key of Object.keys(obj)){
         var value = obj[key];
         if(value===search_value)
         {
             return key;
         }
     }
     return undefined;
 }
 module.exports = findKeyByValue;