import React from "react"
import Reaction from "react-dom"
import './header.css'
import memesData from "./memesData";
export default function Temporary(){

    return(
        
      
        <navbar>
            
             <div className="header">
     <img src={require('./images/troll-face.png')}/>
<h2 className="title">Meme Generator</h2>
<h4 className="project">'React Course - Project 3</h4>
</div>
        
        
      
        </navbar>
        
    )
}