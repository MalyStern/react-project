export const changeUserName = (index, name)=>{
    return{
        type : "CHANGEUSERNAME",
        index,
        name
    };
};