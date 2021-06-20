// Method ???
// Take 9999


const fs = require("fs");

function Directory (path) {

    
    const nameReader = fs
      .readdirSync(path, { withFileTypes: true })
      .map((item) => item.name);
    
    const statReader = nameReader.map((name) =>
      fs.statSync(`./${path}/${name}`)
    );
    
    const sizeReader = statReader.map((stat , id) => {
      const container = {};

            container[stat.size] = statReader.stats;    
    
      return container;
    }); 

    //******** sizes are returned in a container in this format:- [{size : undefined},{size : undefined}, ....] 
    //******   this means I am getting an array of objects with key = size and value= undefined ???


    // const sizesRev = Object.assign({}, ...Object.entries(sizeReader).map(([a,b]) => ({ [b]: a })))
    // console.log(sizesRev)

    const merged = Object.keys(sizeReader).reduce((newObject, key, i) => {
      newObject[nameReader[i]] = key
      return newObject;
    }, {});
    //*********** merged returns {'.git': '0', '.gitignore': '1', ...} // The Problem here is merged returns the index as value and not the sizes however sizes seem to be the key in sizeReader.
    
    

  
    // console.log(merged) 
    //****** sizeReader outputs: [{ '0': undefined },    { '310': undefined }, ...]  */
    // console.log(sizesRev)

    

  

    

   const sizesss = Object.values(sizeReader)





   console.log(merged)
    // console.log(sizesss )
   

   
}   


console.log(Directory("../ts-basics"))


