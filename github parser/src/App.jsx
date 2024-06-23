import React, { useState } from 'react';
// import SearchForm from "./SearchForm";
import GithubUser from "./GithubUser";
import UserRepositories from './UserRepositories';
import RepoReadme from './RepoReadme';
import './App.css';


function App() {
  
  const [ login, setLogin ] = useState("Dan-i-el");
  const [ repo, setRepo ] = useState("learning-react");

  const handleSearch = login => {
    if (login) return setLogin(login);
    setLogin("");
    setRepo("");
  }

  // if (!login) {

  //   return (
  //     <SearchForm value={login} onSearch={handleSearch}/>
  //   )
  // }

  return (
    <>
      {/* <SearchForm value={login} onSearch={setLogin} /> */}
      <GithubUser login="Dan-I-El"/>
      <UserRepositories login={login} repo={repo} onSelect={setRepo}/>
      <RepoReadme login={login} repo={repo} />
    </>
  )
}

export default App;
