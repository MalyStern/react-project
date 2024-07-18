import { useNavigate } from "react-router-dom"
import logo from "../jewerly pictures/logo.png"

export default function Nav() {
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
        </>)
}