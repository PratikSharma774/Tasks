import React from "react"
import Reaction from "react-dom"
import './header.css'
export default function Temporary(){
  function activateLasers(){
    console.log("I was clicked");
  }
    return(
        
       
           <div className="container">
            <img onMouseOver={activateLasers} src="https://picsum.photos/640/360" />
            <button onClick={activateLasers}>Click me</button>
        </div>
    )
}