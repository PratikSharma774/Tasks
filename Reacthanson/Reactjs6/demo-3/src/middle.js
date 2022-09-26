import React from "react"
import Reaction from "react-dom"
import "./mid.css"
export default function TemporaryName(){
    
        
        const thingsArray = ["Thing 1", "Thing 2","Things 3"]
        const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
        function addItem(){
            const newThing=`Thing ${thingsArray.length+1}`
            thingsArray.push(newThing)
            console.log(thingsArray)
        }
        return (
            <div>
                <button onClick={addItem}>Add Item</button>
                {thingsElements}
            </div>
            
    )
}
// ReactDOM.render(<TemporaryName/>,document.getElementById("root"))