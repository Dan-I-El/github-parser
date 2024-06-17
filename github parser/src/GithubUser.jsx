import Fetch from './Fetch';
import token from "./../token.js";


const loadJSON = key => key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

function GithubUser({login}) {
  return (
    <Fetch 
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
}

export default GithubUser;


function UserDetails({data}) {

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
