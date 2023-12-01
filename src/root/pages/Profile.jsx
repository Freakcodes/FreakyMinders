import React from 'react'
import { databases } from '../../appwrite/config'
import { appwriteConfig } from '../../appwrite/config'
import Sidebar from '../../components/Sidebar'
import { useState } from 'react'
import { ID } from 'appwrite'
import { useEffect } from 'react'
import { useAuth } from '../../auth/AuthContext'
 function Profile() {
  const {showPosts,post}=useAuth()
  useEffect(()=>{
    showPosts();
    console.log(post);
  },[]);
  return (
    
      <div className= ' w-fullborder '>
        <div className=' mx-auto'>Profile</div>
        <div className='font-bold text-2xl my-32 w-[full] mx-auto '>

          Posts
          {post.map((ele)=>{
            return (
              <>
                <img src={ele.imageUrl} alt="" className='w-[20%]' />
                <li>{ele.caption}</li>
              </>
            
            )
          })}
          
        </div>
        
      </div>
     
      
    

  )
}

export default Profile