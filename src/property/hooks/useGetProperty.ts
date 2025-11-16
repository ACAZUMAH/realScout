import { collections } from "src/constants";
import { config, databases } from "src/services";

interface propertyParams {
  id: string;
}

export const useGetPropertyById = async ({ id }: propertyParams) => {
  try {
    const response = await databases.getRow({
      databaseId: config.databaseId!,
      tableId: collections.PROPERTIES!,
      rowId: id,
    });

    return response;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    return null;
  }
};
