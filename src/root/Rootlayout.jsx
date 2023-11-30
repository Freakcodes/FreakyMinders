import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import Sidebar from '../components/Sidebar';
function Rootlayout() {
  const {user}=useAuth();
 return user?(
  <div className='flex'>
    
    <Sidebar/>
    <Outlet/>
    
  </div>
 
 ):<Navigate to="/login"/>
}   

export default Rootlayout