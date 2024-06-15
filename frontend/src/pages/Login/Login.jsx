import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"

const Login = ()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login, error, isLoading} = useLogin()


    const handleSubmit = async(e)=>{
        e.preventDefault()

        await login(email,password)
        console.log(error)
    }

    return(
        <form onSubmit={handleSubmit} className="signup">
            <h3>Login</h3>
            <label >Email</label>
            <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
            <button disabled={isLoading}>Login</button>
        {error && <p>{error}</p>}
        </form>
    )
}
export default Login