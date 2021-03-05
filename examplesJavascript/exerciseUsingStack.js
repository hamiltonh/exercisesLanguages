/* 
Problem #2
A string containing only brackets is balanced if the following is true:
1. If it is an empty string
2. If A and B are correct, AB is correct
3. If A is correct, (A) and [A] and {A} are also correct.
Examples of some correctly balanced strings are: “{}()”, “[{()}]”, “({}[()])”.
Examples of some unbalanced strings are: “{}[”, “({)}”, “}{”.
Write a function in javascript that, following the input and output rules explained below, can
evaluate if a string is balanced or not.
Input Format
An array of several strings with a set of brackets in any order.
Sample Input
['',')','{}()','{{{{(){}}}}}','{[]{{{(){}}}}}','{{{(){}}}}}])','{([])}','{([[[]])}']
Output Format
For each case, print the string evaluated followed by the word ‘true’ if the string is balanced, or
by the word ‘false’ if otherwise.
Sample Output
{ "": true, ")": false, "{}()": true, "{{{{(){}}}}}": true, "{[]{{{(){}}}}}": true, "{{{(){}}}}}])": false, "{([])}":
true, "{([[[]])}": false }
*/

//Output: Object result
function isbalanced( arrayInput ) {
    
    //console.table(arrayInput)
    let stack = []
    let objResult = new Object()
    let rst
    let lastCharFromStack = ''
    let bracketTypes = new Array();
        bracketTypes['('] = { open: true,   type: 1 };
        bracketTypes[')'] = { open: false,  type: 1 };
        bracketTypes['{'] = { open: true,   type: 2 };
        bracketTypes['}'] = { open: false,  type: 2 };
        bracketTypes['['] = { open: true,   type: 3 };
        bracketTypes[']'] = { open: false,  type: 3 };

    //console.log( bracketTypes[')'] )

    arrayInput.forEach( (element) => {

        //Validate until proven false
        rst = true
        stack = []

        //If the long is odd, the result is false
        if(element.length % 2 !== 0){
            rst = false
        }
        
        element.split('').forEach( (character, idx) => {
            
            if ( character && rst === true ){
            
                //Open bracket
                if(bracketTypes[character].open ){
        
                    stack.push(character) // add to the end

                // Bracket closed
                } else if( bracketTypes[character].open === false ){
                    
                    lastCharFromStack = stack[stack.length-1]

                    if( lastCharFromStack &&
                        bracketTypes[ lastCharFromStack ].type === bracketTypes[character].type  ){
                        stack.pop(character) // remove from the end
                    }else{
                        rst = false
                        //break //No support with forEach, then i put conditional: rst === true in the beginning
                    }
                }
            }
        })
        
        rst = ( rst && stack.length === 0 ) ? true : false
        objResult[element] = rst
        
    })
    return objResult
}

let input = ['',')','{}()','{{{{(){}}}}}','{[]{{{(){}}}}}','{{{(){}}}}}])','{([])}','{([[[]])}']
//input = [ '{([])}' ]

console.clear()
console.table( isbalanced( input ) )

//Reference
/*
{ "": true, ")": false, "{}()": true, "{{{{(){}}}}}": true, "{[]{{{(){}}}}}": true, "{{{(){}}}}}])": false, "{([])}":
true, "{([[[]])}": false }
*/
