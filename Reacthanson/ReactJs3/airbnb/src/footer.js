import React from "react"
import Reaction from "react-dom"
import './footer.css';
export default function Tempo(){
    return(
     <>
  <div className="card">

  <img src={ require('./images/katie-zaferes.png')} className="card--image" ></img>

 {/* <img src="images/katie-zaferes.png" alt=""
className="card--image" /> */}
 <div className="card--stats">
 <img src={ require('./images/star.png')} className="card--star" ></img>
 {/* <img src="images/star.png" alt=""
className="card--star" /> */}
 <span>5.0</span>
 <span>(6) • </span>
 <span>USA</span>
 </div>
 <p>Life lessons with Katie Zaferes</p>
 <p>From $135 / person</p>
 </div>

  
     </>
    )
}