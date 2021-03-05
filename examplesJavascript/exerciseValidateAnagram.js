/*
Problem #1
Two strings, a and b, are called anagrams if they contain all the same characters in the same
frequencies. For example, the anagrams of CAT are CAT, ACT, TAC, TCA, ATC, and CTA.
Write a function in javascript that, following the input and output rules explained below, can tell if
two strings are anagrams or not.
Input Format
Two strings denoting a and b.
Sample Input
'dElira', 'lidera'
'delirat', 'lidera'

Constraints
- 1 <= length(a), length(b) <= 50
- Strings a and b consist of english alphabetic characters
- The comparison should NOT be case sensitive.

Output format
Print an array with three positions, the first one is a, the second one is b and the third one the
word “anagrams” if a and b are case-insensitive anagrams of each other; otherwise, print “not
anagrams”.
Sample Output
[ "dElira", "lidera", "anagrams" ]
[ "delirat", "lidera", "not anagrams" ]
*/

function anagram(a, b) {
    
    let cantA = a.length
    let cantB = b.length
    let result  = true

    //Conditions
    if( cantA !== cantB ||
        !( a+b ).match(/^[a-zA-Z]+$/) || // Return null if some character dont match
        ( 0 > cantA > 50 && 0 > cantA > 50 ) ){

        result = false

    } else{
   
        let arrayA = a.toUpperCase().split('')
        let arrayB = b.toUpperCase().split('')

        for (let i=0; i < cantA ; i++){

            if(arrayB.length > 0){

                //indexOf>returns the first index at which a given element can be found in the array, or -1 if it is not present.
                let idx = arrayB.indexOf( arrayA[i] );
                //console.log(arrayA[i], arrayB, idx);

                if (idx >= 0 ){
                    //splice>changes the contents of an array by removing or replacing existing elements and/or adding new elements
                    arrayB.splice( idx, 1 )
                }else{
                    result = false
                }
            }
        }
    }

    return [ a, b, result ? 'Anagram' : 'Not Anagram' ] 
}

console.clear()
console.log(anagram('dElira', 'lidera'))
console.log(anagram('dElirat', 'lidera'))

