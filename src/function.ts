/* Function have two type  */
// one Arrow function
// Second Normal function


/* Normal function */
function normalFunction(num1 : number, num2: number): number {
    return  num1 + num2
}

// console.log(normalFunction(1, 3));

/* Arrow Function */

const arrowFunction = (num1: number, num2: string,  num3: string) =>{
 const total =  num1 + num2 + num3;
 return total
}
console.log(arrowFunction(2, "3", "3")) 
