type User ={
    id: number,
  name: {
        firstName: string,
        lastNames: string
    },
    gender:"mail" | "female",
    contact:string 
    address:{
        division:string,
        city:string
    },
} 

type AddFunc = (num1: number, num2: number) => number;

const add : AddFunc = (num1, num2) => num1 + num2;