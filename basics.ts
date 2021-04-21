let userName : string= "ayush"
let hasLoggedIn: boolean = true

userName += " Dhoj";

console.log(hasLoggedIn)

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

//arrays

const names: string[] = userName.split(" ")
const myValues: Array<number > = [1,2,3]

//creating an interface

interface Person{
    first: string;
    last: string;
}

const myPerson:
    Person
 = {
    first:"Ayush",
    last:"Rana",
    
}

const ids: Record<number, string>={
    10:"a",
    20:"b"
}
ids[30] = "c"

//loops and iterators
if(ids[30] === "D"){

}

for(let i=0; i < 10; i++){
    console.log(i)
}

[1,2,3].forEach((v)=> console.log(v))
