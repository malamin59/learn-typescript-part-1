// ? ternary operator : decision marking

const userAge  = 21 ;
const  except  =(age: number) =>{
    // if(age >= 21) {
    //     console.log("you are eligible")
    // }
    // else{
    //    console.log("you are not eligible")   
    // }

    const result = age >=21 ? '("you are  eligible") ' 
    : ("you are not eligible") ;
    // return result

    // console.log(result);
}
except(2)


const userThem = "green them";

const selectedThem = userThem ?? 'light' 
console.log(selectedThem);

const isAuthenticated = null;

const resultWithTernary = isAuthenticated ? isAuthenticated :  'you are  guest'

const resultWithNulish = isAuthenticated ?? "you are guest !";

// console.log({resultWithNulish}, {resultWithTernary});

const user : {
 address :{
    city: string;
    town: string;
    postalCode?:string;
 } } = {
     address:{
city:"abc",
town:"bgs",

    },
 }

 const postalCode = user?.address?.postalCode
 console.log(postalCode);
 