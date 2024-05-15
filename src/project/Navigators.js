import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StoreItems from "./StoreItems";
import Cart from "./Cart"
import Home from "./Home"
import Payment from "./Payment"
import About from "./About"
export default function Navigator() {
    return(
    <BrowserRouter>
        <Routes>
            {/* <Route exact path="/" element={<Home/>} /> */}
            <Route exact path="/" element={<StoreItems/>} />
            <Route exact path="/Cart" element={<Cart/>} />
            <Route exact path="/Payment" element={<Payment/>}/>
            <Route exact path="/About" element={<About/>}/>
        </Routes>
    </BrowserRouter>)
}

