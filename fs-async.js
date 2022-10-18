//fs -async
const fs = require('fs');

const {readFile, writeFile} = fs;

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
    writeFile('./content/result-sync.txt',`Merging two ${first} ${second}`,(err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('result', result);
    } )
    })
})
