const path = require("path");

console.log(path.sep);

// file path
const filePath = path.join("/content", "sub-folder", "test.txt");
console.log(filePath);

// BASE NAME - last part with extension
const base = path.basename(filePath);
console.log(base);

// to get absolute path
const absolute = path.resolve(__dirname, "content", "sub-folder", "test.txt");
console.log(absolute);
