import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/blogLogo.png'
import { AuthContext } from '../context/authContext'

const Navbar = () => {

    const {logout, currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <Link to='/'>
                    <img src={Logo} alt=''/>
                </Link>
            </div>
            <div className='links'>
                <Link className='link' to='/?cat=art'><h4>Art</h4></Link>
                <Link className='link' to='/?cat=science'><h4>Science</h4></Link>
                <Link className='link' to='/?cat=technology'><h4>Technology</h4></Link>
                <Link className='link' to='/?cat=cinema'><h4>Cinema</h4></Link>
                <Link className='link' to='/?cat=design'><h4>Design</h4></Link>
                <Link className='link' to='/?cat=food'><h4>Food</h4></Link>
                <span>{currentUser?.username}</span>
                {currentUser ? 
                (
                <span onClick={logout}>Logout</span>
                ) : (
                <Link className='link' to='/login'>Login</Link>
                )}
                <span className='write'>
                    <Link className='link' to='/write'>Write</Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar