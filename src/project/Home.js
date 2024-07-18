import { useNavigate } from "react-router-dom"
import Nav from'./nav';

export default function Home() {
    const navigate = useNavigate()
    return (
        <>
            <Nav></Nav>
            <button class="b btn btn-outline-dark" onClick={() =>
                navigate("/StoreItems")}>see products</button>
        </>)
}