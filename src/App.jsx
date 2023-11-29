import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Signup from './auth/forms/Signup'
import Login from './auth/forms/Login'
import Rootlayout from './root/Rootlayout'
import AuthLayout from './auth/AuthLayout'
import Home from './root/pages/Home'
import Profile from './root/pages/Profile'
import { AuthProvider } from './auth/AuthContext'

function App() {


  return (
    <main>
      <AuthProvider>
        <Routes>

          {/* Public routes */}
          <Route element={<AuthLayout />}>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Route>
          {/* private routes */}
          <Route element={<Rootlayout />}>
            <Route index element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            
            
          </Route>

        </Routes>

      </AuthProvider>


    </main>
  )
}

export default App
