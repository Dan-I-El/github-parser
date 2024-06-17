import { useState, useEffect, useCallback, useMemo } from 'react';


export function useFetch(uri) {

    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
  
    useEffect(()=> {
  
      if (!uri) return;
      // if(data && data.login == login) return;
  
      fetch(uri)
        .then(response=> response.json())
        .then(setData)
        .catch(()=> setLoading(false))
        .catch(setError);
    }, [uri]);
  
    return {
      loading,
      data,
      error
    };
  }


  export const useIterator = (
    items=[],
    initialIndex=0,
  ) => {
    const [i, setIndex] = useState(initialIndex);

    const prev = useCallback(()=> {
      if (i === 0) return setIndex(items.length - 1);

      setIndex(i - 1);
    }, [i]);

    const next = useCallback(()=> {
      if (i === items.length - 1) return setIndex(0);

      setIndex(i + 1);
    }, [i]);

    const item = useMemo(()=> items[i], [i]);

    return [item || items[i], prev, next];
  };