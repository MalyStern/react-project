import { UseSelector, useSelector , useDispatch} from "react-redux"
import { changeUserName } from "../redux/actions/changeUserName";
import { addUser } from "../redux/actions/addUser";
import { removeUser } from "../redux/actions/removeUser";
export default function UserDetails() {
    const users = useSelector((state) =>state.userReducer)
    const newUser = { name: "dggd", age: "23", city: "Jerusalem"}

    const dispatch = useDispatch()
    return (
        <>
            <h1> Use React-Redux component</h1>
            {users.map((item, i) => (
                <h3>{item.name} {item.age} {item.city} in index {i}</h3>
            ))}
            <h2>{users.age}</h2>
            <h2>{users.city}</h2>
            <input onChange={(e) => {e.preventDefault(); dispatch(changeUserName(0, e.target.value))}}></input>
            <button onClick={(e)=>{e.preventDefault(); dispatch(changeUserName(0, "Efrat"))}}>change user name</button>
            <button onClick={(e)=> {e.preventDefault(); dispatch(addUser(newUser))}}>add user</button>
            <button onClick={(e)=> {e.preventDefault(); dispatch(removeUser(1))}}>remove user</button>
        </>
    )
}