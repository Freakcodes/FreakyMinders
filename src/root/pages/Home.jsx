import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext'




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
      
    </>


  )
}

export default Home