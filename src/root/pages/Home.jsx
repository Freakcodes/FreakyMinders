import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext'
import Sidebar from '../../components/Sidebar';



function Home() {
  const { logoutUser, user } = useAuth();
  const navigate = useNavigate()
  useEffect(() => {
    if (user == null) {
      navigate('/login');
    }
  }, [user])
  return (
    <>
    <div className="flex">
     
      {/* Add the rest of your content here */}
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
        <p className='text-xl font-bold'>{user.name}</p>
        {/* Add your main content components here */}
        
      </div>
      
    </div>
      {/* <div className='flex justify-between mt-4'>

        <h1 className='text-2xl ml-3 '>Welcome to the FreakyMinders <span className='font-bold '>{user.name}</span></h1>


        <button className='bg-black text-white p-0.5 rounded mr-4 ' onClick={logoutUser}>Logout</button>
      </div>
      <div className='profile'>
        <img  className=' w-[20%] rounded-full 'src="https://png.pngtree.com/background/20230519/original/pngtree-the-batman-face-in-the-dark-picture-image_2657106.jpg" alt="" />

      </div> */}
    </>


  )
}

export default Home