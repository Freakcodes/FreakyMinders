import { ID } from "appwrite";
import { account, appwriteConfig, avatars, databases } from "./config";





export async function saveUserToDB({
    accountId,
    name,
    email,
    username,
    imageUrl
}){
    try {
        const newUser=await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            accountId,
            name,
            email,
            username,
            imageUrl
        )
    } catch (error) {
        console.log(error);
    }
}