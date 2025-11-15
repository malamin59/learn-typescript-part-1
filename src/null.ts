// NUllable type

// const getUser = (input: string | null) =>{
// if(input) {
//     console.log(`From BD ${input}`);
//     }  
//     else{
//         console.log(("from bd all users"));
        
//     }  
// }
// getUser(null)

// unknown type 
const discount  =  (input: unknown) =>{
if(typeof input =='number'){
const discount  = input * 0.1
console.log(discount);
}
else if(typeof input === 'string') {
    const [discount] = input.split(" ")
    console.log(Number(discount) * 0.1);  
}
else{
    console.log('wrong input'); 
}
}
discount(100)
discount("100 tk")
discount(null)

// void 

const throFunction  = (msg: string): never=> {
    throw new Error(msg) 
}
throFunction('...Error')