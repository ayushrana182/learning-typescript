// Optional Parameters
function printIngredient (quantity:string, ingredient: string, extra?: string){
    
console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : "" } `)
}

printIngredient("1 CUP", "Flour", "Cheese");
printIngredient("1 CUP", "Flour", );


// Optional Fields
interface User{
    id:string,
    info?:{
        email:string;


    }
}

function getEmail(user : User): string {
    if(user.info){
        return user.info.email!;
    }
    return "";
}

function getEmailEasy (user : User): string{
    return user?.info?.email ??"";
}

// optional callback
function addWithCallback(x:number, y:number, callback?: ()=> void){
    console.log([x , y])
    callback?.();
}
addWithCallback(20, 39, )