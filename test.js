//  // Method 1
// Take 1

const tree = "./node_modules/";
const fs = require("fs");

const nameReader = fs
  .readdirSync(tree, { withFileTypes: true })
  .map((item) => item.name);

const statReader = nameReader.map((name) =>
  fs.statSync(`./node_modules/${name}`)
);

const sizeReader = statReader.map((stat) => {
  const container = {};

  container[stat.size] = statReader.stats;

  return container;
});

console.log(nameReader);
console.log(sizeReader);

// const keys = Object.keys(sizeReader)
// const keys2 = Object.values(sizeReader)
// const keys3 = Object.entries(sizeReader)

// const convertBytes = function(type,bytes) {
//     const sizes = ["Bytes", "KB", "MB", "GB", "TB"]

//     if (bytes == 0) {
//       return "0 bits"
//     }

//     const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))

//     if (i == 0) {
//       return bytes + " " + sizes[i]
//     }

//     return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
//   }

// console.log(nameReader)
// console.log(sizeReader[8])
