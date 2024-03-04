type QueryType = {
  storeId?: number;
};

const getStringifiedQuery = (query: QueryType): string => {
  const searchParams = new URLSearchParams();

  if ('storeId' in query && !!query?.storeId) {
    searchParams.append('query', query.storeId.toString());
  }

  return searchParams.toString();
};

export { getStringifiedQuery };
