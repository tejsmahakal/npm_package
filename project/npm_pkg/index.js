
const greetUser = (userName)=>{
    console.log(`Hello,${userName}`);
};

const greetWithSalutation = (saltution,userName)=>{
    console.log(`Hello ${saltution}.${userName}`);
};

module.exports = {
    greetUser,
    greetWithSalutation,};