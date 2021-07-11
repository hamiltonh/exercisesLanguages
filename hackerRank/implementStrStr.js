/*
28. Implement strStr()
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 
Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    
    if (needle === '') {
        return 0
    }

    const lengthH = haystack.length
    const lengthN = needle.length

    for (let index = 0; index < lengthH; index++) {
        
        if(haystack[index] === needle[0]) {
            
            let passValidation = true
            for (let index2 = 1; index2 < lengthN; index2++) {
                // console.log('eval inside: ',index2,needle[index2] , haystack[index+index2])
                
                if(needle[index2] !== haystack[index+index2]) {
                    passValidation = false
                    break
                }
            }

            if(passValidation){
                return index
            }
        }
    }
    return -1 
 }

console.log('INIT')
console.log( strStr("mississippi",'issip') )
// console.log( strStr("hello","ll") )


