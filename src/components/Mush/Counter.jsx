import './Mush.scss';
import { useState } from 'react';
let Counter = () => {
  let [count, setCount] = useState(0);
  let myCount = () => {
    setCount(count + 1);

    count < 5
      ? document.querySelector('.counter-background').classList.add('green')
      : document.querySelector('.counter-background').classList.add('red');
  };
  return (
    <>
      <div className='counter-background'>
        <p>the count is : {count}</p>
        <button onClick={myCount}>lick me</button>
      </div>
    </>
  );
};
export default Counter;
