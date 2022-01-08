/*
 * @Description:
 * @Author:zsj
 * @Date: 2021-05-27 15:16:19
 * @LastEditTime: 2021-07-06 10:14:01
 * @LastEditors: Frank
 * @Usage:
 */
var fs = require("fs");
const mkdirp = require("mkdirp");

const nameDir = "everyday";
const nameArr = process.argv.slice(2);

const fileName = nameArr.join("_").replace(".", "");
mkdirp(`./test/${nameDir}/${fileName}`).then(() =>
  console.log(`made test dir ${fileName}`)
);
mkdirp(`./src/${nameDir}/${fileName}`).then(() =>
  console.log(`made src dir  ${fileName}`)
);
