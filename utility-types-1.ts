interface MyUser{
    name:string;
    id:string;
    email?:string;
    phone?:string;
}

// interface MyUserOptional{
//     name?:string;
//     id?:string;
//     email?:string;
// }

type MyUserOptional= Partial<MyUser>

const merge = (user:MyUser , overrrides: MyUserOptional): MyUser =>
{
    return{
        ...user,
        ...overrrides,
    }
}


console.log(
    merge({
        name:"Ayush",
        id:"bar",
        email:"email@email.com"
    },{id:"bass", phone:"9861280178"})
)

type RequiredMyUser = Required<MyUser>;

type EmailOrPhone = Pick<MyUser, "email" | "phone">

const mapById = (users:MyUser[]): Record<string, MyUser> => {
    return users.reduce((a,v) => {
        return{
            ...a,
            [v.id]:v,
        }
    }, {})
}

console.log(
    mapById([
        {id:"foo", name:"Mr.Foo"}, {id:"baz", name: "Mrs. Baz"}
    ])
)