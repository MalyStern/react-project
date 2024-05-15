export const AddToCart = (product)=>{
    return{
        type : "ADDTOCART",
        product
    };
};
export const DeleteFromCart = (product)=>{
    return{
        type : "DELETEFROMCART",
        product
    };
};
export const Plus = (item)=>{
    return{
        type: "PLUS",
        item
    }
}
export const Minus = (item)=>{
    return{
        type: "MINUS",
        item
    }
}