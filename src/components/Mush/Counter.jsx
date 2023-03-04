import './Mush.scss';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  let addCount = () => {
    setCount(count + 1);
  }
  let decrement =()=>{
    setCount(count - 1);
  }
  return (
    <>
      <div className='counter-background'>
        <p>the count is : {count}</p>
        <button className='w-20 h-20 bg-green-400' onClick={addCount}> + </button>
        <button className='w-20 h-20 bg-red-400' onClick={decrement}> - </button>
        {count >= 5 || count<=-5 ? <div className='w-20 h-20 bg-yellow-400'></div> : <div className='w-20 h-20 bg-red-400'></div>}
      </div>
    </>
  );
};


export default Counter;