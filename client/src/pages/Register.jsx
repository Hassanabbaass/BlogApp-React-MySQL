import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../services/Register'

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    await registerUser(inputs).then((result) => {
      navigate('/login')
    }).catch((err)=> {
      setErr(err.response.data)
    })
  }

  return (
    <div className='authDiv'>
        <h1>Register</h1>
        <form>
            <input required type='text' placeholder='username' name='username' onChange={handleChange}/>
            <input required type='text' placeholder='email' name='email' onChange={handleChange}/>
            <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
            <button onClick={handleSubmit}>Register</button>
            {err && <p>{err}</p>}
            <span>Already have an account? <Link to='/login'>Login</Link></span>
        </form>
    </div>
  )
}

export default Register