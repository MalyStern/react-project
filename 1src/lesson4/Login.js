import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Login() {
    const navigate = useNavigate()
  
    const [name, setName] = useState("")
    const pass = "123456"
    return (
        <>
            <h1>Home component</h1>
            <input placeholder="Name" onChange={(e)=>setName(e.target.value)}></input>
            <button onClick={()=> navigate(`/about/${name}/${pass}`)}>Login</button>
        </>
    )
}