import { faker } from "@faker-js/faker";
import { FixedSizeList } from "react-window";
import GithubUser from './GithubUser';
import './App.css';

const tahoe_peaks = [ 
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067}
];

// Used to create fake information
const bigList = [...Array(5000)].map(()=> ({
  name: faker.person.firstName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar()
}));


function List({ data = [], renderRow, renderEmpty }) {
  
  return !data.length ? renderEmpty : (

    <ul>
    {data.map((item, i) => (
      <li key={i}>{renderRow(item)}</li>
    ))}
  </ul>
  )

}

function App() {

  const renderRow = ({ index, style }) => (
    <div style={{ ...style, display: "flex" }}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50}/>
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  )

  return (
    <FixedSizeList height={window.innerHeight} width={window.innerWidth - 20} itemCount={bigList.length} itemSize={50}>
      {renderRow}
    </FixedSizeList>
  );
    // <GithubUser login="Dan-I-El"/>
}

export default App;
