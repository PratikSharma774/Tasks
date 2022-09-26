import React from "react"
import Reaction from "react-dom"
import memesdata from "./memesData";
import './meme.css';
export default function Tempo(){
  const [memeImage,setMemeImage]=React.useState("./images/troll-face.png");
  
  function getMemeImage(){
      const memesArray=memesdata.data.memes;
  const randomNumber=Math.floor(Math.random() * memesArray.length)
  const url=memesArray[randomNumber].url
  setMemeImage(url)
  setMemeImage.preventDefault();
  // preventD
  }
    return(
     <>
   <form className="form">
    <input className="input" type="text" placeholder="top text"/>
    <input className="input" type="text" placeholder="bottom text"/>
    <button onClick={getMemeImage}>GET A NEW MEME PAGE</button>
    {/* <img src={require('./images/troll-face.png')} />
     */}
     <img src={memeImage}/>
   </form>
   </>
    )
}