import { useState, useEffect } from 'react';
import token from "./../token.js";


const loadJSON = key => key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export function useFetch(uri) {

  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(()=> {

    if (!uri) return;
    // if(data && data.login == login) return;

    fetch(uri)
      .then(response => response.json())
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


function GithubUser({login}) {

  const { loading, data, error } = useFetch(`https://api.github.com/users/${login}`);

  // useEffect(()=> {
  //   if (!data) return;
  //   if (data.login == login) return;

  //   const { name, avatar_url, location } = data;

  //   saveJSON(`user:${login}`, {
  //       name,
  //       login,
  //       avatar_url,
  //       location
  //   })
  // }, [data]);

    // if(data && data.login == login) return;

  if (loading) return <h1>Loading...</h1>;

  if (error) return <pre>{JSON.stringify(data, null, 2)}</pre>

  if (!data) {
    return null;
  }

  return (
    <div className="githubUser">
        <img
            src={data.avatar_url}
            alt={data.login}
            style={{ width: 200 }}
        />

        <div>
            <h1>{data.login}</h1>
            {data.name && <p>data.name</p>}
            {data.location && <p>{data.location}</p>}
        </div>

    </div>
  )
}

export default GithubUser;