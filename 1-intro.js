// GLOBAL - NO WINDOW !!
// __dirname    - path to the current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env where the program is being executed
console.log(__dirname);
console.log(__filename);
// console.log(process);
setInterval(() => {
    console.log('Hello World');
}, 1000);