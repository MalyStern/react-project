export const addUser = (user)=>{
    console.log("action exe")
    return{
        type : "ADDUSER",
        user
    };
};