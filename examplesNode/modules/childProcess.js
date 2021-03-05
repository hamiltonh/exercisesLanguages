//child process: EXEC, SPAWN

console.clear()
const { exec, spawn } = require('child_process')


//Ejemplos exec
/*
console.log('Listing files:')
exec( 'dir -l', (err, stdout, sterr) => {

    if(err) {
        console.error('err')
        return false
    }
    console.log(stdout)
})
*/

/* console.log('Execute node with another instance:')
exec( 'node tryCatch.js', (err, stdout, sterr) => {

    if(err) {
        console.error('err')
        return false
    }
    console.log(stdout)
}) */


//spawn
const myprocess = spawn('cmd.exe', ['/c','dir']);

console.log(myprocess.pid);
console.log(myprocess.connected);

myprocess.stdout.on("data", dato => console.log(dato.toString()))
process.on("exit", () => console.log("process end"));

