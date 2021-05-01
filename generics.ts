function simpleState<T>(initial:T): [() => T,(v:T)=> void]{
    let str:T = initial
    return[
        ()=> str,
        (v:T) => {
            str = v
        }
    ]
}
//simple generic function
const [str1getter, str1setter] = simpleState(10)
console.log(str1getter())
str1setter(69)
console.log(str1getter())

// Overridng inferred generic type
const [str2getter, str2setter] = simpleState<string | null>(null)
console.log(str2getter())
str2setter("asgdf")
console.log(str2getter())

//Ranker Example
interface Rank<RankItem>{
    item:RankItem,
    rank:number
}

function ranker<RankItem>(
    items:RankItem[],
    rank: (v:RankItem) => number):RankItem[]{
        const ranks: Rank<RankItem> [] = items.map((item) => ({
            item,
            rank:rank(item),
        }))
        ranks.sort((a,b) => a.rank - b.rank)
        return ranks.map((rank) => rank.item)
    }

    interface Pokemon {
        name:string;
        hp:number
    }

    const pokemon : Pokemon[] = [
        {
            name:"Bulbasaur",
            hp: 20
        },

        {
            name:"Venasaur",
            hp: 5
        },

    ]

    const ranks = ranker(pokemon, ({hp})=> hp);
    console.log(ranks)


