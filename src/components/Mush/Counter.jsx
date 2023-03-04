import './Mush.scss';
import { useState, useEffect } from 'react';
import data from './Mush.json'

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState([data])
  let addCount = () => {
    setCount(count + 1);
  }
  let decrement =()=>{
    setCount(count - 1);
  }

  const changeName = ()=>{
    const random = Math.ceil(Math.random() * 4)
    const names = data[random]
    setName(names)
  }
  return (
    <>
      <div className='counter-background'>
        <p>the count is : {count}</p>
        <button className='w-20 h-20 bg-green-400' onClick={addCount}> + </button>
        <button className='w-20 h-20 bg-red-400' onClick={decrement}> - </button>
      </div>
      <div>
        <button onClick={changeName}>Name</button>
        <div>{name.name}</div>
      </div>
    </>
  );
};


export default Counter;