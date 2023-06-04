var fs = require("fs");
var async = process.argv[2];
fs.readFile(async, function (arr, info) {
  var async1 = info.toString().split("\n").length - 1;
  console.log(async1);
});
