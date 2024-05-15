import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { About } from "../lesson4/About";
import { Login } from "../lesson4/Login";
import History from "../lesson4/History";

export default function NavigateWithLink() {
    return (
        <BrowserRouter>
            <div>
                <center>
                    <button className="btn btn-outline-primary">
                        <Link style={{ color: "red" }} to="/about">About</Link>
                    </button>
                    <span>       </span>
                    <Link to="/login">Login</Link>
                    <span>  </span>
                    <Link to="/history">History</Link>
                </center>
                <Routes>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/history" element={<History></History>}></Route>
                </Routes>
            </div>
        </BrowserRouter>

    )
}