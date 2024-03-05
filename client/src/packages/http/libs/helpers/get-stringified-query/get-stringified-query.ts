type QueryType = {
  storeId?: number;
};

type QueryTypeCart = {
  IDs?: number[];
};

const getStringifiedQuery = (query: QueryType | QueryTypeCart): string => {
  const searchParams = new URLSearchParams();

  if ('storeId' in query && !!query?.storeId) {
    searchParams.append('storeId', query.storeId.toString());
  }

  if ('IDs' in query && !!query?.IDs) {
    searchParams.append('IDs', query.IDs.toString());
  }

  return searchParams.toString();
};

export { getStringifiedQuery };
