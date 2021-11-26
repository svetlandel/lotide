const assertArraysEqual = require('./assertArraysEqual');
      function middle(array){
        let newArray = [];
        if(array.length <= 2) {
            return newArray = [];
        } else if(array.length%2 === 0) {
            let middle1 = array[Math.floor((array.length - 1) / 2)];
            let middle2 = array[Math.floor((array.length + 1) / 2)];
            newArray.push(middle1, middle2);
            return newArray;
           
        } else{
            let middle = array[Math.floor(array.length / 2)];
            newArray.push(middle);
            return newArray;
        }
    };
    module.exports = middle;