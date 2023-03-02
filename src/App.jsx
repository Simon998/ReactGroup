import './App.css';
import data from "./data.json"
import DisplayData from './components/DisplayData';
import { useEffect, useState } from 'react';
function App() {
  const [name, setName] = useState([])
  useEffect(()=>{

    const results = data.map((names)=>names.name)
    console.log(results)
    setName(results)
  }, [])
  return (
    <div className="App">
      <h1>Names of People</h1>
      <DisplayData names={name}/>
    </div>
  );
}

export default App;
