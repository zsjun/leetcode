var fs = require("fs");
const mkdirp = require("mkdirp");

const nameDir = "divideAndConquer";
const nameArr = process.argv.slice(2);

const fileName = nameArr.join("_").replace(".", "");
console.log(111, fileName);
mkdirp(`./test/${nameDir}/${fileName}`).then(() => console.log(`made test dir ${fileName}`));
mkdirp(`./src/${nameDir}/${fileName}`).then(() => console.log(`made src dir  ${fileName}`));
