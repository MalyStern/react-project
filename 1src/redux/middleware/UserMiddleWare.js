export const addUserMW = () => next => action => {
    if (action.type == "ADDUSER") {
        console.log("apply midle ware");
        if(action.user.name === "Tammi"){
            action.user.name = "new name"
        }
    }
    return next(action)
}