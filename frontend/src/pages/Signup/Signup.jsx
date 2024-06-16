import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import { Link } from 'react-router-dom'
import "../Signup/Signup.css"

const Signup = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('volunteer')
  const [villageAssigned, setVillageAssigned] = useState('')

  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(fullName, role, villageAssigned, email, password)
    console.log(error)
  }

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <i className='fa-solid fa-user' />
          <input
            type='text'
            className='user_input'
            placeholder='Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
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
        <div className='radio-group'>
          <label htmlFor='volunteer'>
            <input
              type='radio'
              id='volunteer'
              name='role'
              value='volunteer'
              checked={role === 'volunteer'}
              onChange={() => setRole('volunteer')}
            />
            Volunteer
          </label>
          <label htmlFor='admin'>
            <input
              type='radio'
              id='admin'
              name='role'
              value='admin'
              checked={role === 'admin'}
              onChange={() => setRole('admin')}
            />
            Admin
          </label>
        </div>
        <div className='input'>
          <i className='fa-solid fa-map-marker-alt' />
          <input
            type='text'
            className='user_input'
            placeholder='Village Assigned'
            value={villageAssigned}
            onChange={(e) => setVillageAssigned(e.target.value)}
          />
        </div>
        <div>
          Already have an account? <Link to='/login'>Login</Link>
        </div>
      </div>
      {error && <div className='error-message'>{error}</div>}
      <div className='submit' onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit'}
      </div>
      <div>
        Already have an account? <Link to='/login'>Login</Link>
      </div>
    </div>
  )
}

export default Signup
