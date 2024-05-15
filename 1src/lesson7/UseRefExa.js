import { useRef } from "react"

export function UseRefExa(){
    const stringRef = useRef("Origin string")
    stringRef.current ="new string"

    const inputRef = useRef()
    const changeInputStyle = () =>{
        inputRef.current.style.color = "blue"
        if(inputRef.current.value.length == 4){
            inputRef.current.style.color = "red"
        }
        else{
            inputRef.current.style.color = "blue"
        }
    }
    return(
        <>
        <h1>{stringRef.current}</h1>
        <input ref={inputRef} onChange={(e) => changeInputStyle()}></input>
        </>
    )
}