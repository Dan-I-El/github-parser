import { useState,useEffect } from 'react';


const token = "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";


const loadJSON = key => key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

function GithubUser({login}) {

  const [data, setData] = useState(loadJSON(`user:${login}`));
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);


  useEffect(()=> {
    if (!data) return;
    if (data.login == login) return;

    const { name, avatar_url, location } = data;

    saveJSON(`user:${login}`, {
        name,
        login,
        avatar_url,
        location
    })
  }, [data]);

  useEffect(()=> {

    if (!login) return;

    setLoading(true);

    // if(data && data.login == login) return;

    fetch(`https://api.github.com/users/${token}`)
      .then(response => response.json())
      .then(setData)
      .catch(setError);
  }, [login]);

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