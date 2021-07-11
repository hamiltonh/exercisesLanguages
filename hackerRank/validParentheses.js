/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    if (s.length % 2 !== 0){
        return false
    }
    
    let arrayStack  = new Array()
    let objBrackets = new Array()
    data = s.split('')
    
    objBrackets['('] = { open: true, type: 1 }
    objBrackets[')'] = { open: false, type: 1 }
    objBrackets['{'] = { open: true, type: 2 }
    objBrackets['}'] = { open: false, type: 2 }
    objBrackets['['] = { open: true, type: 3 }
    objBrackets[']'] = { open: false, type: 3 }
    
    for (const ind in data) {
        
        if( ind === 0 || objBrackets[data[ind]].open){
            arrayStack.push(data[ind]) 
        } else{
        
             if(    arrayStack.length > 0
                 && objBrackets[data[ind]].type  === objBrackets[ arrayStack[ arrayStack.length-1 ] ].type){
                 arrayStack.pop()   
             } else {
                 return false
             }
        }   
    
    }
    
    return arrayStack.length === 0
};

console.log(isValid( "([}}])" ))