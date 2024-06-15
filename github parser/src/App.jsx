import GithubUser from './GithubUser';
import './App.css';

const tahoe_peaks = [ 
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067}
];


function List({ data = [], renderEmpty }) {
  
  if (!data.length) return renderEmpty;

  return (
    <ul>
     {
      data.map((peak, i)=> (
        <li key={i}>
          {peak.name} - {peak.elevation.toLocaleString()}ft
        </li>
      ))
     }
    </ul>
  )
}

function App() {

  return <List data={tahoe_peaks} renderEmpty={<p>This list is empty.</p>}/>;
    // <GithubUser login="Dan-I-El"/>
}

export default App;
