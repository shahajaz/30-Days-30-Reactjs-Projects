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
                    <button className='increaseBtn'>Increase</button>
                    <button className='decreaseBtn'>Decrease</button>
                    <button className='resetBtn'>Reset</button>
                </div>
            </div>
        </div>
    )
}
export default CounterApp;
