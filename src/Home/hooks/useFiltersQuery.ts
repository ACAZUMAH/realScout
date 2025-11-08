import { Query } from "react-native-appwrite";

interface filters {
    limit?: number;
    query?: string;
    filter?: string;
}
export const useFiltersQuery = (params: filters) => {
    const queries = [Query.orderDesc("$createdAt")];

    if (params.limit) {
        queries.push(Query.limit(params.limit));
    }

    if(params.filter && params.filter !== 'All') {
        queries.push(Query.equal('type', params.filter));
    }

    if(params.query) {
        queries.push(Query.search('name', params.query));
        queries.push(Query.search('address', params.query));
        queries.push(Query.search('type', params.query));
    }
   
    return queries;
}