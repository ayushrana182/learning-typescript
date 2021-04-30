type ThreeDCoordinate = [x:number, y:number, z:number]

function add3DCoodinate ( c1:ThreeDCoordinate, c2: ThreeDCoordinate): ThreeDCoordinate {
    return[
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2],
    ]
}

console.log(add3DCoodinate([2,4,5], [4,5,6]))


///String State
function simpleStringState(initial:string): [() => string,(v:string)=> void]{
    let str:string = initial
    return[
        ()=> str,
        (v:string) => {
            str = v
        }
    ]
}

const [str1getter, str1setter] = simpleStringState("hello")
const [str2getter, str2setter] = simpleStringState("ayush")
console.log(str2getter())

console.log(str1getter())
str1setter("goodbye")
console.log(str1getter())
console.log(str2getter())

// Tuple is an array and each one of the elements can be named and have different types

