import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
function AuthLayout() {
      const isAuthenticated=false;
  return (
    <>
        {
            isAuthenticated?(<Navigate to="/"/>):(
                <>
                    <section>
                        <Outlet/>
                    </section>
                </>

            )
            
        }
    </>
  )
}

export default AuthLayout