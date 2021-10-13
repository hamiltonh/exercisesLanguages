function fizzBuzz(n) {
    
    for(let i= 1; i<=n; i++){
        const isMultipleOf3 = i%3 === 0 ? true : false
        const isMultipleOf5 = i%5 === 0 ? true : false
        
        if(isMultipleOf3 && isMultipleOf5){
            console.log('FizzBuzz')
        } else if(isMultipleOf3){
            console.log('Fizz')
        } else if(isMultipleOf5){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }

}

console.log(fizzBuzz(15));