const cart = []
export const CartReducer = (state = cart, action) => {
    switch (action.type) {
        case ("ADDTOCART"):
            {
                if (action.product.qty == 0) {
                    alert("אזל מהמלאי")
                    return state;
                }
                if (action.product.qty > 0) {
                    action.product.cart++;
                    if (!state.includes(action.product))
                        return [...state, action.product]
                }
                return state
            }
        case ("DELETEFROMCART"):
            return (state.filter((product) => product.id != action.product.id))
        case ("PLUS"): {
            if (action.item.qty == 0) {
                alert("אזל מהמלאי")
                return state;
            }
            const cart = [...state]
            state.map((item) => (
                (item.name == action.item.name) ?
                    cart[cart.indexOf(item)].cart++ : null
            ))
            return cart;
        }
        case ("MINUS"): {
            const cart = [...state]
            state.map((item) => (
                (item.name == action.item.name) ?
                    cart[cart.indexOf(item)].cart-- : null
            ))
            if (action.item.cart == 0) {
                return state.filter((item) => item.cart > 0)
            }
            return cart;
        }
    }
    return state
}