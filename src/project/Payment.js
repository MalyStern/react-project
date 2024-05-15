import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import logo from "../jewerly pictures/logo.png"
export default function Payment() {
    const navigate = useNavigate()
    const items = useSelector((state) => state.CartReducer)
    var sum = 0;
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
            <p class="title">Your Order</p>
            <div id="table" class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>item</th>
                            <th>description</th>
                            <th>price</th>
                            <th>amount</th>
                            <th>total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => {
                            sum += item.cart * item.price;
                            return (
                                <tr key={item.id}>
                                    <td><img id="tblimg" src={item.image}></img></td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>{item.cart}</td>
                                    <td>{item.cart * item.price}</td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>total price:</td>
                            <td>{sum}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button class="b btn btn-outline-dark">Pay Now</button>
        </>)
}

