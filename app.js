//MODULES

//COMMONJS, every file is modules
//MODULES - Encapsulated code (share minimum code)
const names = require('./names');
const sayHi = require('./utils');
require('./mindGrenade');
// sayHi(names.firstname);

//OS
const os = require('os');
// console.log(os.uptime())


//fs - sync
const fs = require('fs');

const {readFileSync, writeFileSync} = fs;
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/first.txt', 'utf8');
// flag is to merge
writeFileSync('./content/result-sync.txt',`Merging two ${first} ${second}`, {flag: 'a'});
// console.log(first);






