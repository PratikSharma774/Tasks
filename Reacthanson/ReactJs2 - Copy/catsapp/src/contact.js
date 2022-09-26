import React from "react"
import Reaction from "react-dom"

export default function Contact(props){
    return(
        <>
        <div className="contact-card">
            <img src={props.img} alt=" "/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="require('./images/phone-icon.png')}"/>
                <p>{props.phone}</p>
        </div>
        <div className="info-group">
            <img src="images/mail-icon.png" alt=" "/>
            <p>{props.email}</p>
            </div>
            </div>
        </>

)
}