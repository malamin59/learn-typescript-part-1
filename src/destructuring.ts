/* destructuring */

const user = {
    id:123,
    name:{
        firstName:"AL AMIN",
        middleName:"patwary",
        lastName:"EPB"
    },
    gender:"Mail",
    favouriteColor:"Black"
}

const {name:middleName} = user




const friends = ['alamin', 'hasan' ,'rokon', ];

const [, , a] = friends
console.log(a);
