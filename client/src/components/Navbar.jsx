import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/blogLogo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <img src={Logo} alt=''></img>
            </div>
            <div className='links'>
                <Link className='link' to='/?cat=art'><h4>Art</h4></Link>
                <Link className='link' to='/?cat=science'><h4>Science</h4></Link>
                <Link className='link' to='/?cat=technology'><h4>Technology</h4></Link>
                <Link className='link' to='/?cat=cinema'><h4>Cinema</h4></Link>
                <Link className='link' to='/?cat=design'><h4>Design</h4></Link>
                <Link className='link' to='/?cat=food'><h4>Food</h4></Link>
                <span>Hassan</span>
                <span>Logout</span>
                <span className='write'>
                    <Link className='link' to='/write'>Write</Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar