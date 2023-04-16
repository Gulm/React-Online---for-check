import React from 'react'

const Counter = ({ counter, onIncrease, onDecrease }) => {
    return (
        <div style={{ display: 'inline-flex', gap: 10 }}>
            <button onClick={onIncrease}>Increase</button>
            <p>{counter}</p>
            <button onClick={onDecrease}>Decrease</button>
        </div>
    )
}

export default Counter
