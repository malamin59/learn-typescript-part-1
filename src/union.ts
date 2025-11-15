/* learn Union */
type UserRole = "admin" | "user" | "guest";

const getDashboard = (role: UserRole) =>{
if(role === "admin"){
    return 'admin dashboard'
}
else if (role === 'user') {
    return 'admin dashboard'
}
else{
    return "guest dashboard"
}
};
getDashboard('guest');

// intersection 
type Employee = {
    id: string,
    name: string,
    phone:string    
}

type Manager = {
    designation:string,
    teamSize:number
} 
type EmployeeManager  = Employee & Manager

const  Me : EmployeeManager  = {
    id:"123",
    name:"alamin",
    phone:"121121",
    designation:"mern",
    teamSize:1212
}
console.log(Me);
