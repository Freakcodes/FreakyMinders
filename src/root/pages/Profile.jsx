import React from 'react'
import { databases } from '../../appwrite/config'
import { appwriteConfig } from '../../appwrite/config'
import Sidebar from '../../components/Sidebar'
function Profile() {
  async function data() {

    let promise= await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,  
  
    )
    
    
  }
  
  data();

  return (
    
      <div className='border '>
        <div className=' w-[30px] mx-auto'>Profile</div>
        <div className='font-bold text-2xl my-32 w-[30px] mx-auto '>Posts</div>
      </div>
     
      
    

  )
}

export default Profile