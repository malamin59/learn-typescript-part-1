// const user  : {
//     organization: "Programming hero", // value => type
//     firstName: string;
//     middleName?: string;
//     lastName: string;
//     isMarried: boolean
// } = {
//     organization: 'Programming hero',
//     firstName : 'ALAMIN', 
//     middleName: "hasan", // optional type 
//     lastName: "patwary",
//     isMarried: true,
// }
// user.organization = 'Programming Hero fire';

// console.log(user);


const user  : {
    readonly organization: string, // access modifier
    firstName: string;
    middleName?: string;
    lastName: string;
    isMarried: boolean
} = {
    organization: 'Programming hero',
    firstName : 'ALAMIN', 
    middleName: "hasan", // optional type 
    lastName: "patwary",
    isMarried: true,
}
// user.organization = 'Programming Hero fire';

console.log(user);
