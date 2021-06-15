//  // Method 1
// Take 1


const fs = require("fs");

function Directory (path) {

    
    const nameReader = fs
      .readdirSync(path, { withFileTypes: true })
      .map((item) => item.name);
    
    const statReader = nameReader.map((name) =>
      fs.statSync(`./${path}/${name}`)
    );
    
    const sizeReader = statReader.map((stat) => {
      const container = {};
    
      container[stat.size] = statReader.stats;
    
      return container;
    });
    
    console.log(nameReader);
    console.log(sizeReader);
}

console.log(Directory("../ts-basics"))


