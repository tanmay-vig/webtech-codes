let fs = require("fs");

let data = fs.readFileSync("demo.txt", "utf-8");

console.log(data);
console.log("After the file has been read");
