import { createContext, useState, useEffect, useContext } from "react";
import { account, appwriteConfig, databases, storage } from "../appwrite/config";
import { useNavigate } from "react-router-dom";
import { ID} from 'appwrite';
import { Audio } from "react-loader-spinner";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
        const navigate = useNavigate()

        const [loading, setLoading] = useState(true)
        const [user, setUser] = useState(null);
        const[error,setError]=useState(false);
        const [post,setPost]=useState([]);
        useEffect(() => {
            //setLoading(false)
            checkUserStatus()
         }, [])

         const loginUser = async (userInfo) => {
            setLoading(true)

            

            try{
                let response = await account.createEmailSession(userInfo.email, userInfo.password)
                let accountDetails = await account.get();
                setUser(accountDetails)
            }catch(error){
                console.error(error);
                setError(true);
            }
            setLoading(false)
            
         }

         const logoutUser = async () => {
            await account.deleteSession('current');
            setUser(null)
            
         }

         const registerUser = async (userInfo) => {
            setLoading(true)

            try{
                
                let response = await account.create(ID.unique(), userInfo.email, userInfo.password, userInfo.username);
        
                await account.createEmailSession(userInfo.email, userInfo.password1)
                let accountDetails = await account.get();
                setUser(accountDetails)
                navigate('/')
            }catch(error){
                console.error(error)
            }
        
            setLoading(false)
         }

         const checkUserStatus = async () => {
            try{
                let accountDetails = await account.get();
                setUser(accountDetails)
            }catch(error){
                
            }
            setLoading(false)
         }
         const createPost=async(image,caption)=>{
            const uploadedFile=await uploadFile(image);
            const fileUrl= getFilePreview(uploadedFile.$id);
            console.log(fileUrl);
            //Create post 
            const newpost=await databases.createDocument(
                appwriteConfig.databaseId,
                appwriteConfig.postCollectionId,
                ID.unique(),
                {
                    imageId:ID.unique(),
                    caption:caption,
                    imageUrl:fileUrl
                }
            )
           return newpost;
         }
         const uploadFile=async(image)=>{
            try{
                const uploadedFile=await storage.createFile(
                    appwriteConfig.storageId,
                    ID.unique(),
                    image
                )
                return uploadedFile
            }
            catch(error){
                console.log(error);
            }


         }
          function getFilePreview(fileId) {
            try {
              const fileUrl = storage.getFilePreview(
                appwriteConfig.storageId,
                fileId,
                2000,
                2000,
                "top",
                100
              );
          
              if (!fileUrl) throw Error;
          
              return fileUrl;
            } catch (error) {
              console.log(error);
            }
          }
        const showPosts=async()=>{
           let data= await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.postCollectionId
           )
           
            setPost(data.documents);
           
        }
       


        const contextData = {
            user,
            post,
            loginUser,
            logoutUser,
            registerUser,
            createPost,
            showPosts
        }

    return(
        <AuthContext.Provider  value={contextData}>
            {loading?<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>:children}
        </AuthContext.Provider>
    )
}

//Custom Hook
export const useAuth = ()=> {return useContext(AuthContext)}

export default AuthContext;