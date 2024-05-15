import { useId } from "react"

export default function UseIdExample(){
    const userInputId = useId()
    return(
        <input id={userInputId + "userName"}></input>
    )
}