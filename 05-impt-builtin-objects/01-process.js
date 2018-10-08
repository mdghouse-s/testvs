console.log(process.pid);
//stdout is a std output stream
//writabe stream s have write method

process.stdout.write("Hello World");

//similarly process.stdin, process.stderr
// process.stdin.on('data',(content)=>{
//     console.log(content.toString())
// });

console.log(process.env);

console.log(process.env.OS);

//process object is event emitter
process.on('exit', (exitCode)=>{
    console.log("Node process exited with code "+ exitCode);
})


