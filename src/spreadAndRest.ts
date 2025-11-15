// /* spread & Rest */

// // Spread operator

// const friends = ['tuhin', 'ataul'];
// const schoolFriend  =['hasan', 'rokon']
// const collegeFriend  =['alamin', 'rakiv']

// friends.push(...schoolFriend);
// friends.push(...collegeFriend);
// console.log(friends);

// const user = {
//   name:"nothing",
//   phoneNumber:"012331",
//    };

//    const otherInfo = {
//     hobby:"trabling",
//     favoriteColor:"Black"

//   };

// const userInfo = {...user, ...otherInfo};
// // console.log(userInfo);

// // rest operator 

/* CREATE A LOOP WITH REST OPERATOR */

// first create a Arrow function 
const sendInvited = (...friends: string[]) =>
  {friends.forEach((friend: string) =>{console.log(`Invited to ${friend}`)})} 



sendInvited("HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM", "HASAN", "ROKON" , "RAKIV", "MEHRAV", "RAHAD", "SHAMIM",)












