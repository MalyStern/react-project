import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Nav from'./nav';

export default function Payment() {
    const navigate = useNavigate()
    const items = useSelector((state) => state.CartReducer)
    var sum = 0;
    return (
        <>
            <Nav></Nav>
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

