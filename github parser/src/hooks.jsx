import { useState, useEffect, useCallback, useMemo, useRef } from 'react';


export function useFetch(uri) {

    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    const mounted = useMountedRef();
  
    useEffect(()=> {
  
      if (!uri) return;
      // if(data && data.login == login) return;
      if (!mounted.current) return;
      setLoading(true);
      fetch(uri)
        .then(data=> {
          if (!mounted.current) throw new Error("Component is not mounted");
          return data;
        })
        .then(response=> response.json())
        .then(setData)
        .catch(()=> setLoading(false))
        .catch(error => {
          if (!mounted.current) return;
        })
      setError;
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


  export function useMountedRef() {
    const mounted = useRef(false);
    useEffect(()=> {
      mounted.current = true;
      return ()=> (mounted.current = false);
    });

    return mounted;
  }