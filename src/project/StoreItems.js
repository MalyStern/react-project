import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { DecreaseQty } from "../redux/actions/ProductAction"
import { AddToCart } from "../redux/actions/CartAction"
import logo from "../jewerly pictures/logo.png"

export default function StoreItems() {
  const items = useSelector((state) => state.productReducer)
  const cart = useSelector((state) => state.CartReducer)
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