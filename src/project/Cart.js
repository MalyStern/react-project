import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { DecreaseQty } from "../redux/actions/ProductAction"
import { Plus, Minus, DeleteFromCart } from "../redux/actions/CartAction"
import { AddQty } from "../redux/actions/ProductAction"
import logo from "../jewerly pictures/logo.png"
export default function Cart() {
  const items = useSelector((state) => state.CartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-mine">
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <a class="nav-link bt" onClick={() => navigate("/")}><img id="logo" src={logo}></img></a>
            </li>
            <li class="nav-item">
              <a class="nav-link bt" onClick={() => navigate("/About")} >About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link bt" onClick={() => navigate("/")}>Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link bt" onClick={() => navigate("/Cart")}>Cart</a>
            </li>
          </ul>
        </div>
      </nav>
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
