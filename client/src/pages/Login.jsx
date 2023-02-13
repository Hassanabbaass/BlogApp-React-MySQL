import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='loginDiv'>
        <h1>Login</h1>
        <form>
            <input type='text' placeholder='username' />
            <input type='password' placeholder='password' />
            <button>Login</button>
            <p>This is an error</p>
            <span>Dont have an account? <Link to='/register'>Register</Link></span>
        </form>
    </div>
  )
}

export default Login