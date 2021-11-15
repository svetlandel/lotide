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

    function assertArrayEqual (array1, array2) {
        if (eqArrays(array1, array2)===true) {
          console.log("Arrays match: " + "array#1: ["+ array1 +  "] " + "array#2: [" + array2 + "]");
        } else {
          console.log("Arrays do not match: " + "array#1: ["+ array1 + "] " + " array#2: ["+ array2 + "]");
        }
      };

      function without(originalArray, arrayToExclude){
        const newArray = [];
        for (let i =0; i < originalArray.length; i++) {
          var flag = true;
            for (let j=0; j < arrayToExclude.length; j++) {          
              if (originalArray[i] === arrayToExclude[j]) {   
                    flag = false;        
                }                           
            }
            if (flag === true) {
              newArray.push(originalArray[i]);
            }       
        }
        console.log(newArray);
        return newArray;
      }