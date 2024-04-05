let fs = require("fs");

let data = fs.readFile("demo.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("After the file has been read");
