const { readFile, writeFile } = require('fs');
console.log('Start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            { flag: 'a' },
            (err, result) => {
                console.log('Done with this start');
            },
        );
    })
});
console.log('Starting next task');