// function fn (){
//     let acum = 1
//     for (let index = 1; index < 1000000000; index++) {
//         acum = acum+index;
//     }
//     return acum
// }

// console.time('programa')

// console.clear()
// console.time('fn time')

// console.log( fn() )
// console.log('fin proceso!!!!');

// console.timeEnd('fn time');
// console.timeEnd('programa')


// cb
function fn (callback){
    let acum = 1
    for (let index = 1; index < 1000000000; index++) {
        acum = acum+index;
    }
    callback(acum)
}


console.clear()
fn(function(cb){
    console.log(cb);
})
console.log('fin proceso!!!!');

new Promise((resolve, reject)=>{
    resolve(x)
})



