import { Account, Avatars, Client, TablesDB } from "react-native-appwrite";

export const config = {
  platform: "com.realScout.app",
  endPoint: `${process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT}`,
  projectId: `${process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID}`,
  databaseId: `${process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID}`,
};

export const client = new Client()
  .setEndpoint(config.endPoint!) 
  .setProject(config.projectId!)
  .setPlatform(config.platform!);


export const avatar = new Avatars(client);

export const account = new Account(client);

export const databases = new TablesDB(client);
