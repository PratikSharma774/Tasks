import React from "react"
import Reaction from "react-dom"
import "./mid.css"
export default function TemporaryName(){
    return(
        <div className="mid">
        <h1>why learn Reactjs</h1>
        <ul>
            <li className="ul">First released in 2013</li>
            <li className="ul">Compartmentalize the page</li>
            <li className="ul"> Maintained by Facebook</li>
            <li className="ul">power thousands of app</li>
        </ul>
        </div>
    )
}
// ReactDOM.render(<TemporaryName/>,document.getElementById("root"))