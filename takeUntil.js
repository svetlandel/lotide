const takeUntil = function(array, callback) {
    let results=[];
    for(let i=0; i<array.length; i++) {
       let element = array[i];
        if(!callback(element)) {
            results.push(element); 
            }else{
                    break;
            }           
    }
    return results;
   }