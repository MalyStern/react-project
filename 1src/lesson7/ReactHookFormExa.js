import { useForm } from "react-hook-form"

export function ReacthookFormExa() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSuccess = (data) => { console.log("form submitted", data) }
    const onFailed = (error) => { console.log("form failed", error) }

    const requirments = {
        userName: {
            required: "name is required"
        },
        password: {
                required: "password is required",
                maxLength:{
                    value: 12,
                    message: "password up to 12 digits"
                },
                minLength: {
                value: 7,
                message: "password at least 7 digits"
            }
        }
    }

    return (
        <>
            <h1>react Form</h1>
            <form onSubmit={handleSubmit(onSuccess, onFailed)}>
                <input placeholder="name" name="userName" {...register("userName", requirments.userName)}></input>
                <small style={{color:"red"}}>{errors?.userName && errors.userName.message}</small>
                <br></br>
                <input type="password" name="password" {...register("password", requirments.password)}></input>
                <small>{errors?.password && errors.password.message}</small>
                <br></br>
                <center>
                    <button>Submit</button>
                </center>
            </form>
        </>
    )
}