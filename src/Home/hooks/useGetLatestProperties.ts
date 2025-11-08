import { Query } from "react-native-appwrite";
import { collections } from "src/constants";
import { config, databases } from "src/services";

export const useGetLatestProperties = async () => {
  try {
    const response = await databases.listRows({
      databaseId: config.databaseId!,
      tableId: collections.PROPERTIES!,
      queries: [Query.orderAsc("$createdAt"), Query.limit(5)],
    });
    return response.rows;
  } catch (error) {
    console.error("Error fetching latest properties:", error);
    return [];
  }
};
