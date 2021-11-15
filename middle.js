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
      
      function middle(array){
        var newArray = [];
        if(array.length <= 2) {
            console.log(newArray);
            return newArray = [];
        } else if(array.length%2 === 0) {
            var middle1 = array[Math.floor((array.length - 1) / 2)];
            var middle2 = array[Math.floor((array.length + 1) / 2)];
            return newArray.push(middle1, middle2);
        } else{
            var middle = array[Math.floor(array.length / 2)];
            return newArray.push(middle);
        }
    }