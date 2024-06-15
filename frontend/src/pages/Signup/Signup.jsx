import { useState } from 'react'
import {useSignup} from "../../hooks/useSignup"

const Signup = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role,setRole]= useState('')
  const [villageAssigned, setVillageAssigned] = useState('')  
  
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(fullName, role, villageAssigned, email,password)
    console.log(error)
  }

  return (
    <div className='bg-green'>
      <form onSubmit={handleSubmit} className='bg-red-300'>
        <h3>Sign Up</h3>
        <label>FullName</label>
        <input
          placeholder='fullName'
          type='name'
          onChange={(e) => setFullName(e.target.value)}
        />
        <label>Role</label>
        <input
          placeholder='role'
          type='name'
          onChange={(e) => setRole(e.target.value)}
        />
        <label>Village Assigned</label>
        <input
          placeholder='villageAssigned'
          type='name'
          onChange={(e) => setVillageAssigned(e.target.value)}
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
