var fs = require("fs");
const mkdirp = require("mkdirp");

const nameArr = process.argv.slice(2);

const fileName = nameArr.join("_").replace(".", "");

mkdirp(`./test/binaryTree/${fileName}`).then(() => console.log(`made test dir ${fileName}`));
mkdirp(`./src/binaryTree/${fileName}`).then(() => console.log(`made src dir  ${fileName}`));
