var fs = require("fs");
const mkdirp = require("mkdirp");

const nameDir = process.argv[2] || "greed";
const nameArr = process.argv.slice(3);
const fileName = nameArr.join("_").replace(".", "");

mkdirp(`./test/${nameDir}/${fileName}`).then(() => console.log(`made test dir ${fileName}`));
mkdirp(`./src/${nameDir}/${fileName}`).then(() => console.log(`made src dir  ${fileName}`));
