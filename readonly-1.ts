interface Dog{
    name: string
    breed: string
}




function makeDog (name:string, breed:string): Readonly<Dog>{
    return{
        name,
        breed
    }
}

const kali = makeDog("Kali", "Bhusiya")


console.log(kali)

//Readonly Tuple

function makeCordinate (x: number, y: number, z:number) : readonly [number, number, number] {
    return [x,y,z]
}


// Really Constant Arrays

const reallyConst = [1,2,3] as const;

