import { useState } from "react";

const Counter1 = ()=>{
    const [count, setCount] = useState(0)  
    const handleIncrement=() => {setCount(count+1)}
    const handleDecrement=() => {setCount(count-1)}

    return(
        <div>
            <button className='w-10 h-10 bg-red-200' onClick={handleDecrement}>-</button>
            {count}
            <button className='w-10 h-10 bg-green-400' onClick={handleIncrement}>+</button>
            {count>=5? <div className="w-20 h-20 bg-blue-500"></div>: <div className="w-20 h-20 bg-yellow-400"></div>}
        </div>

    )
}

export default Counter1;