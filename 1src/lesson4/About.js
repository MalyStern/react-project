import { useParams } from "react-router-dom"

export function About() {
    const params = useParams()
    const name = params.userName
    const pass = params.password
    return (
        <>
            <h1>Hi {name} {pass}</h1>
        </>
    )
}