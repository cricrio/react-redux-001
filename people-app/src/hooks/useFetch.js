import { useEffect, useState } from 'react';

function addSearchParamsInUrl(url, searchParams) {
  const urlParams = new URLSearchParams(searchParams);
  return `${url}?${urlParams.toString()}`;
}

function translateToJSONServerFormat(searchParams) {
  return {
    _limit: searchParams.limit,
    _sort: `${searchParams.sort.direction} ${searchParams.sort.by}`,
    [searchParams.filter.on]: searchParams.filter.value,
  };
}

export function useFetch(url, searchParams) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const apiUrl = searchParams
          ? addSearchParamsInUrl(url, translateToJSONServerFormat(searchParams))
          : url;
        const reponse = await fetch(apiUrl);
        const data = await reponse.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url, searchParams]);

  if (loading) {
    return { loading: true };
  }

  return { data, loading: false, error };
}
