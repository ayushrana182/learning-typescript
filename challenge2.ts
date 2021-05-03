//Reporoduce forEach, Map and Filter using reduce 

function myForEach <T>(items: T[], forEachFunc: (v: T) => void):void{
    items.reduce((a,v) => {
        forEachFunc(v);
        return undefined;
    }, undefined)
}

myForEach(["a", "b", "c"] ,(v => console.log(`forEach ${v}`)))




function myFilter<T> (items:T[], FilterFunc: (v:T) => boolean) : T[] {
    return items.reduce<T[]>((a,v) => (FilterFunc(v) ? [...a, v] : a), [])
}


console.log(myFilter([1,2,3,4,5,6,7,20], (v) => v % 2 === 0));

 function myMap <T, K> (items:T[], mapFunc: (v:T) => K ): K[]{
     return items.reduce((a,v) => [...a, mapFunc(v)], [] as K [])
 }


console.log(myMap([1,2,3,4,5,6,7,20], (v) => (v*10).toString()));
 