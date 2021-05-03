//implementing Pluck

function pluck<DataType, KeyType extends keyof DataType>(items: DataType[], key:KeyType) : DataType[KeyType][]{
    return items.map(item => item[key]);
}

const dogs = [
    {name:"Kalu", age: 8},
    {name: "Bruno", age:11}
]

console.log(pluck(dogs,"name"))
console.log(pluck(dogs,"age"))


//Event Map

interface BaseEvent {
    time:number,
    user: string
}

interface EventMap{
    addToCart: BaseEvent & {quantity: number, productID: string},
    checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name:string, data: unknown): void{
    console.log([name, data])
}

sendEvent("addToCart", {
    productID: "foo",
    user: "bar",
    quantity: 1,
    time: 50,
})

sendEvent("checkout", {
    time: 34,
    user:"Ram"
})