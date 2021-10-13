// Codility
// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {

    orderedArray = A.sort((a, b)=> a-b)

    let minNumber = 1
    if (minNumber < orderedArray[0])
        return minNumber

    for (const idx in orderedArray){

        if(minNumber=== orderedArray[idx]) minNumber++

        if(minNumber < orderedArray[idx]){
            // console.log(minNumber , '<', orderedArray[idx], '-', idx)
            if ( minNumber > orderedArray[idx-1] ){
                return minNumber
            }
        }    
    }
    
    return  orderedArray[orderedArray.length -1]<1 
            ? 1
            :orderedArray[orderedArray.length -1]+1
}


let case1 =  [1, 3, 6, 4, 1, 2]
let case3 = [1, 2, 3]
let case2 = [-1, -3]

console.log(solution(case1))
console.log(solution(case3))

