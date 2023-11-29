import React, { useEffect } from 'react'
import {useForm} from "react-hook-form"
import { Link,  useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
function Login() {
  const navigate=useNavigate();
  const {user,loginUser}=useAuth();
  useEffect(()=>{
    if(user){
      navigate('/')
      console.log(user);
    }
  },[user])
  
  const {
    register,
    handleSubmit,
    formState:{errors},
    reset

  }=useForm();
  // async function onSubmit(data){
    
    
  //   loginUser(data.email,data.password);
  //   let accountDetail=await account.get();
    
  //   console.log(user);
  //   console.log(accountDetail);
    
  // }


  return (
    <div className='w-[400px] mx-auto my-[250px]'>
      <h1 className='text-3xl font-senibold font-serif mb-5'>FreakyMinders</h1>
      <form onSubmit={handleSubmit(loginUser)} >
        <div className="input-box   ">
          <label className='block text-xl font-medium '>
            Username
          </label>
          <input type="text" className='border  border-black rounded-md w-[70%] pl-1 py-0.5 '  name='email' {...register("email",{
            required:true,
            pattern:{
              value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message:"Username is not valid"
              
            },
            
          })
          
           
          } />
          {errors.email && <p className='text-red-400'>{errors.email.message}</p>}
          {errors.email && errors.email.type==="required" && <p className='text-red-400'>email is required</p>}
        </div>
        <div className="input-box  ">
          <label className=' block  text-xl font-medium'>
            Password
          </label>
          <input type="password"  name='password' className='border  border-black rounded-md w-[70%]  pl-1 py-0.5 ' {...register("password",{
            required:true,
            validate:{
              checkLength:(value)=>value.length>=8,
              matchPattern:(value)=> /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
            }

          })} />
          {errors.password?.type === "required" && (
    <p className="errorMsg text-red-500">Password is required.</p>
)}
{errors.password?.type === "checkLength" && (
    <p className="errorMsg text-red-500">
    	Password should be at-least 6 characters.
    </p>
)}
{errors.password?.type === "matchPattern" && (
    <p className="errorMsg text-red-500">
    	Password should contain at least one uppercase letter, lowercase
letter, digit, and special symbol.
    </p>
)}
          {errors.password && errors.password.type==="minLength" &&(
              <p className=' text-red-500 font-light'>Password should be atleast six characters</p>
          )}
        </div>
        <button type="submit" className='border bg-blue-600 text-white mt-3 p-0.5 rounded-md'>Login</button>
        

      </form>
      <div className="creatacc ">
        <p className='py-3 '>Don't have an acc? <Link to='/signup' className='text-blue-800'>Create One</Link></p>
      </div>
    </div>
  )
}

export default Login