//function parameters

export function printToFile(text: string,callback: ()=> void):void{
    console.log(text);
    callback();
}

//function params with params

//creating type for a function

export type MutationFunction = (v:number) => number;

export function arrayMutate(numbers: number[], mutate:MutationFunction):number[]{
    return numbers.map(mutate)
}

//using the Function type 

const myNewMutation :MutationFunction = (v:number) => v*40

console.log(arrayMutate([1,2,3], (v)=> v * 20))
console.log(myNewMutation(50))

//Returning Fucntion

//creating a type for the function
export type AdderFunc = (val: number) => number

export function createAdder(num:number): AdderFunc{
    return(val: number) => num + val;
}

const addOne = createAdder(20);
console.log(addOne(50))