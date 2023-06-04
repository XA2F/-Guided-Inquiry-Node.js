var fs = require("fs");
var sync = fs.readFileSync(process.argv[2]);
var newLines = sync.toString().split("\n").length - 1;
console.log(newLines);
