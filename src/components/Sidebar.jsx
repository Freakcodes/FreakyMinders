import React from 'react'
import { FaHome } from "react-icons/fa"
import { useAuth } from '../auth/AuthContext'
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const { logoutUser } = useAuth()
  return (
    <div className="bg-gray-800 text-white h-screen w-1/6 p-4">
      <h2 className="text-2xl font-bold mb-4">FreakyMinders</h2>
      <ul>
        <Link to='/'><li className="mb-2 "><FaHome className='inline' />Home</li></Link>
        <Link to="/create"><li className="mb-2">Create</li></Link>
        <Link to='/profile'><li className="mb-2">Profile</li></Link>
        {/* Add more items as needed */}
      </ul>
      <button className='absolute bottom-0 mb-5 text-xl bold rounded p-0.5' onClick={logoutUser}>Logout</button>
    </div>
  )
}

export default Sidebar