import { Client,Account,Databases,Storage,Avatars} from 'appwrite'


export const client=new Client();
export const appwriteConfig={
    projectId:"6555f3a2a51e8e2ffbc1",
    url:"https://cloud.appwrite.io/v1",
    databaseId:"655650854ffa062506b4",
    storageId:"655650c457d80c192a0e",
    userCollectionId:"655651a5095afe3f6060",
    saveCollectionId:"655651be98ae0d5aa682",
    postCollectionId:"65565183ece95f5e97b6"
}

client
  .setEndpoint(appwriteConfig.url)
  .setProject(appwriteConfig.projectId);

export const account=new Account(client);
export const databases=new Databases(client);
export const storage=new Storage(client);
export const avatars= new Avatars(client);
