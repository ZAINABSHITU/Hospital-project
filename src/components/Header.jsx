import React from 'react'
import Logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' sticky top-0 flex w-full justify-around bg-blue-900   text-white items-center'>

      <div className='flex items-center justify-between max-w-[280px]'>
        <img src={Logo} className='w-[80px] h-20 r-0 rounded-full'/>
      <h1>SARDAUNA HOSPITAL</h1>
      </div>

      <nav className='flex justify-between'>
    <ul className=' m-auto flex gap-4' >

      <li><Link to='/Home'>Home</Link></li>
      <li><Link to='/Blog'>Blog</Link></li>
      <li><Link to='/Service'>Service</Link></li>
      <li><Link to='/About'>About</Link></li>
      <li><Link to='/Contact'>Contact</Link></li>
      <li><Link to='/Appointment'>Appointment</Link></li>
      <li><Link to='/Department'>Depaartment</Link></li>
      <li><Link to='/Doctors'>Doctors</Link></li>
      <li><Link to='/Register'>Register</Link></li>
    </ul>
  </nav>
    </div>
  )
}

export default Header