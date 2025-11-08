import { collections } from "src/constants";
import { config, databases } from "src/services";
import { useFiltersQuery } from "./useFiltersQuery";

interface UseGetPropertiesParams {
  filter?: string;
  query: string;
  limit?: number;
}
export const useGetProperties = async (params: UseGetPropertiesParams) => {
  try {
    const queries = useFiltersQuery(params);

    const response = await databases.listRows({
      databaseId: config.databaseId!,
      tableId: collections.PROPERTIES!,
      queries: queries,
    });
    
    return response.rows;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
};
