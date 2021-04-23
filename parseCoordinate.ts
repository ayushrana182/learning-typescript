interface Coordinate{
    x:number;
    y:number;
}


//function Overloading
function parseCoordinate(str:string):Coordinate;
function parseCoordinate(obj:Coordinate):Coordinate;
function parseCoordinate(x:number, y:number):Coordinate;
function parseCoordinate(arg1:unknown, arg2?:unknown):Coordinate{
    let coord:Coordinate={
        x:0,
        y:0,
    };
    if(typeof arg1 ==="object"){
        coord={
            ...(arg1 as Coordinate)
        }
    }else if(typeof arg1 ==="string"){
        (arg1 as string).split(',').forEach(str =>{
            const [key,value] = str.split(":");
            coord[key as "x" | "y"] = parseInt(value)
        })
    }else{
        coord={
            x:arg1 as number,
            y: arg2 as number
        }
    }

    return coord;
}

console.log(parseCoordinate(34, 45))
console.log(parseCoordinate({x:69, y:89}))
console.log(parseCoordinate("x:12,y:43"))
