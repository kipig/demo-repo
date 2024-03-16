const { readFileSync, writeFileSync } = require("fs");
// read from the file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/sub-folder/second.txt", "utf8");
console.log(first);
console.log(second);

// create new file
writeFileSync("./content/result.txt", `Here is result ${first}, and ${second}`);
