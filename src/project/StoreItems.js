import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { DecreaseQty } from "../redux/actions/ProductAction"
import { AddToCart } from "../redux/actions/CartAction"
import Nav from'./nav';

export default function StoreItems() {
  const items = useSelector((state) => state.productReducer)
  const cart = useSelector((state) => state.CartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
      <Nav></Nav>
      <p class="title">Our Collection</p>
      <div id="cards">
        {items.map((item) => (
          <div class="card" style={{ "width": "19rem" }}>
            <img class="card-img-top" src={item.image} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">{item.description}</h5>
              <p class="card-text">price: {item.price}</p>
              <div><button onClick={(e) => {
                e.preventDefault()
                dispatch(AddToCart(item))
                dispatch(DecreaseQty(item.id))
              }}
                class="btn btn-outline-dark">Add to cart</button>
                <p id="none" style={{ "display": "inline" }}>     already in cart: {item.cart}</p></div>
            </div>
          </div>

        ))}
      </div>
      <button class="b btn btn-outline-dark but" onClick={() => {
        navigate("/Cart")
      }}
      >show cart</button>
    </>
  )
}