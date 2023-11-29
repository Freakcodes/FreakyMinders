import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate,Link } from 'react-router-dom';
import {useAuth} from "../AuthContext"



function Signup() {
    const navigate=useNavigate();
      const {user,registerUser}=useAuth();
  //   async function onSubmit(data){
  //   const newUser=await createUserAccount(data);
    
    
  //  }
   useEffect(()=>{
    if(user){
      navigate('/login');
      
    }
  },[user])
  const {
    register,
    handleSubmit,
    formState:{errors}
  }=useForm()
  return (
    <div className='container my-[100px] w-[700px]  mx-auto'>
      <h1 className='font-semibold text-3xl'>FreakyMinders</h1>
      <h1 className='text-center text-2xl font-medium '>Create a new account</h1>
      
      <form action=""onSubmit={handleSubmit(registerUser)}>
          <div className="input-box mb-5">
            <label className='block'>First Name</label>
            <input type="text" name='firstname' className='border  border-black rounded-md w-[50%] pl-1 py-0.5' {...register("firstname")} />
          </div>
          <div className="input-box mb-5">
            <label className='block'>Last Name</label>
            <input type="text" name='lastname' className='border  border-black rounded-md w-[50%] pl-1 py-0.5' {...register("lastname")} />
          </div>  
          <div className="input-box mb-5">
            <label className='block'>Username</label>
            <input type="text" name='username' className='border  border-black rounded-md w-[50%] pl-1 py-0.5' {...register("username")} />
          </div>
          <div className="input-box mb-5">
            <label className='block'>Email</label>
            <input type="text" name='email' className='border  border-black rounded-md w-[50%] pl-1 py-0.5' {...register("email",{
              required:true,
              pattern:{
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid."
              }
            })} />
             {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="input-box">
            <label className='block '>Password</label>
            <input type="password" name="passowrd" className='border  border-black rounded-md w-[50%] pl-1 py-0.5' {...register("password",{
              required:true,
              pattern:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/
            })}/>
            {errors.password && <p className="text-red-500">Password must consits of six letters,special character,uppercase and number</p>}
          </div>
          <button type="submit" className='border bg-blue-600 text-white my-3 p-0.5 rounded-md' >Sign Up</button>
          
          
      </form>
      <div className="login">
        <p className='py-3 '>Already have an account? <Link to='/login' className='text-blue-800'>Login</Link></p>
      </div>

    </div>
  )
}

export default Signup