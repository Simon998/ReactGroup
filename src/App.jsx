import './components/Mush/Mush.scss';
import data from './data.json';
import DisplayData from './components/Mush/DisplayData';
import { useEffect, useState } from 'react';
import Mush from './components/Mush/mush';
import mydata from './components/Mush/Mush.json';
import Counter from './components/Mush/Counter';
function App() {
  const [name, setName] = useState([]);
  useEffect(() => {
    const results = data.map((names) => names.name);
    console.log(results);
    setName(results);
  }, []);
  return (
    <>
      <div className='App'>
        <DisplayData names={name} />
      </div>
      <div className='mycontainer'>
        <h1>the deadly squad</h1>
        <div className='mush'>
          {mydata.map((single) => {
            return <Mush {...single} key={single.id} />;
          })}
        </div>
      </div>
      <div className='mycounter'>
        <Counter />
      </div>
    </>
  );
}

export default App;
