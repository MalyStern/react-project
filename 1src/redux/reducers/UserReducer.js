const initialState = [{ name: "my_name", age: "90", city: "Jerusalem" }, { name: "Rachel", age: "45", city: "Heifa"}]
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("CHANGEUSERAGE"):
            return { ...state, age: action.payload }

        case ("CHANGEUSERNAME"):
            const new_state = [...state]
            new_state[action.index].name = action.name
            return new_state

        case("ADDUSER"):{
            console.log("reducer")
            return [...state, action.user]
        }
           

            
        case("REMOVEUSER"):
            return state.filter((item, index) => index !== action.index)

    }
    return state
}