import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { DecreaseQty } from "../redux/actions/ProductAction"
import { Plus, Minus, DeleteFromCart } from "../redux/actions/CartAction"
import { AddQty } from "../redux/actions/ProductAction"
import Nav from'./nav';

export default function Cart() {
  const items = useSelector((state) => state.CartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
      <Nav></Nav>
      <p class="title">Your Cart</p>
      <div id="cards">
        {items.map((item) => (
          <div class="card" style={{ "width": "18rem" }}>
            <img class="card-img-top" src={item.image} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">{item.description}</h5>
              <p class="card-text">{item.price}</p>
              <p class="card-text">cart: {item.cart}</p>
              <button onClick={() => {
                dispatch(Plus(item))
                dispatch(DecreaseQty(item.id))
              }}
                class="btn btn-outline-dark">+</button>
              <button onClick={() => {
                dispatch(DeleteFromCart(item))
              }}
                class="btn btn-outline-dark">🗑</button>
              <button onClick={() => {
                dispatch(Minus(item))
                dispatch(AddQty(item.id))
              }}
                class="btn btn-outline-dark">-</button>
            </div>
          </div>


        ))}
      </div>
      <button class="b btn btn-outline-dark" onClick={() => {
        if (window.confirm("are you done with your order?") == true)
          navigate("/Payment")
      }
      }>payment</button>
    </>)

}
