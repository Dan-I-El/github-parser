import React, { useState } from 'react';
// import SearchForm from "./SearchForm";
import GithubUser from "./GithubUser";
import UserRepositories from './UserRepositories';
import RepoReadme from './RepoReadme';
import './App.css';


function App() {
  
  const [ login, setLogin ] = useState("Dan-i-el");
  const [ repo, setRepo ] = useState("learning-react");

  return (
    <>
      {/* <SearchForm value={login} onSearch={setLogin} /> */}
      { login && <GithubUser login="Dan-I-El"/> }
      { login && <UserRepositories login={login} repo={repo} onSelect={setRepo}/> }
      { login && repo && (
        <RepoReadme login={login} repo={repo} />
      )}
    </>
  )
}

export default App;
