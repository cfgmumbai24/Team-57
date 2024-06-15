import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"
import "../Login/Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
    console.log(error)
  }
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Login</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <i className='fa-solid fa-envelope' />
          <input
            type='email'
            className='user_input'
            placeholder='Email id'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input'>
          <i className='fa-solid fa-lock' />
          <input
            type='password'
            className='user_input'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {error && <div className='error-message'>{error}</div>}
      <div className='forget-pswd'>
        Forget Password? <span>Click Here</span>
      </div>
      <div className='submit' onClick={handleSubmit}>
        Submit
      </div>
      <div className='switch-container'>
        Don't have an account? <Link to='/signup'>Signup</Link>
      </div>
    </div>
  )
}

export default Login