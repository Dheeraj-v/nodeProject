const fs = require('fs');

const {readFile, writeFile} = fs;
const util = require('util');
const readFilePromisify = util.promisify(readFile);
const writeFilePromisify = util.promisify(writeFile);

/** first method traditional method */
const getText = (path) => {
    return new Promise ((resolve,reject)=>{
        readFile(path, 'utf8', (err, data)=>{
            if(err){
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })

}

const start = async () => {
    try{
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        await writeFilePromisify('./content/result-sync.txt', `merging two from async patterns ${first} ${second}`);
    }catch (err){
        console.log(err)

    }

}
start()


/** using util.promisify module  */

const start1 = async () => {
    try{
        const first = await readFilePromisify('./content/first.txt', 'utf8');
        console.log('--- from promisify',first)
    }catch (err){
        console.log(err)

    }

}
start1()