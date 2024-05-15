import { UseSelector, useSelector , useDispatch} from "react-redux"
import { changeUserName } from "../redux/actions/changeUserName";
export default function UserDetails2() {
    const user = useSelector((state) =>state.userReducer)
    return (
        <>
        
            <h1> Use React-Redux component - component 2</h1>
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
        </>
    )
}