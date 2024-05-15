import { useEffect, useState } from "react";

export default function Lesson3() {
    const [value, setValue] = useState()
    const [name, setName] = useState()
    useEffect(()=>{
        alert("use effect alert")
    }, [])

    

    let is_true = true;
    return (
        <>
        { is_true? <h1>true</h1>: ""}
        <input placeholder="value" onChange={(e) => setValue(e.target.value)}></input>
        <input placeholder="name" onChange={(e) => setName(e.target.value)}></input>
        </>

        
    )
}