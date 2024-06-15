import { useState } from 'react'
import {useSignup} from "../../hooks/useSignup"

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(firstName, lastName,email,password)
    console.log(error)
  }

  return (
    <div className='bg-green'>
      <form onSubmit={handleSubmit} className='bg-red-300'>
        <h3>Sign Up</h3>
        <label>FirstName</label>
        <input
          placeholder='firstName'
          type='name'
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>LastName</label>
        <input
          placeholder='lastName'
          type='name'
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Email</label>
        <input
          placeholder='email'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          placeholder='password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={isLoading}>SignUp</button>
        {error && <div className='bg-black ' style={{color:"white"}}>{error}</div>}
      </form>
    </div>
  )
}
export default Signup
