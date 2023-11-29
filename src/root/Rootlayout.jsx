import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
function Rootlayout() {
  const {user}=useAuth();
 return user?<Outlet/>:<Navigate to="/login"/>
}   

export default Rootlayout