var fs = require("fs");
const mkdirp = require("mkdirp");

// const nameDir = "toutiao";
const nameArr = process.argv.slice(2);

const fileName = nameArr.join("_").replace(".", "");
// mkdirp(`./test/${nameDir}/${fileName}`).then(() => console.log(`made test dir ${fileName}`));
mkdirp(`./java-leetcode/src/${fileName}`).then(() => console.log(`made src dir  ${fileName}`));
