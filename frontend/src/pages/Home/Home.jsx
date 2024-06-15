import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

const Home = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const handleClick = () => {
    logout()
  }
  return (
    <div className='home'>
      <h1>Home</h1>
      {user && (
        <div>
          <span>{user.email}</span>
          <button onClick={handleClick}>LogOut</button>
        </div>
      )}
      {!user && <div>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>}
    </div>
  )
}

export default Home
