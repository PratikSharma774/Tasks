import React from "react"
import "./App2.css"
export default function App2() {
    const[count,setCount]=React.useState(0)
    function add()
    {
        setCount(count +1)
    }
    function sub(){
        setCount(count -1)
    }
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    return (
        <div className="counter">
            <button className="counter--minus" onClick={sub}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}