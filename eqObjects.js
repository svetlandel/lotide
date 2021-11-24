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


const ab = { d: "1", c: "2" };
const ba = { c: "2", d: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // = false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false