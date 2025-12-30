import React, { useState } from 'react'
import './CounterApp.css'

const CounterApp = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div className="container">
                <h1>Counter App</h1>

                <div className="count-display">{count}</div>

                <div className="button-group">
                    <button onClick={()=> setCount(count + 1)} className='increaseBtn'>Increase</button>
                    <button  onClick={() => setCount(0)} className='resetBtn'>Reset</button>
                    <button onClick={()=> setCount(count - 1)} className='decreaseBtn'>Decrease</button>
                </div>
            </div>
        </div>
    )
}
export default CounterApp;
