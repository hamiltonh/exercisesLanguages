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

console.clear()

function isbalanced( arrayInput ) {
    
    //console.table(arrayInput)
    let stack = []
    const bracketTypes = {
        "[" : "open",
        "]" : "close",
        "(" : "open",
        ")" : "close",
        "{" : "open",
        "}" : "close"
    }
console.log( bracketTypes['['] );
    // arrayInput.forEach(element => {
        
    //     console.log(element)
    //     if(stack.length === 0){
    //         if (element){
    //             stack.push(element) // add to the end
    //         }
    //     } else{

    //     }

    // })

    //let arraySplit = 
     //console.log ( arrayInput.split(',') )
}

let input = ['',')','{}()','{{{{(){}}}}}','{[]{{{(){}}}}}','{{{(){}}}}}])','{([])}','{([[[]])}']
console.log( isbalanced( input ) )


