import React from "react"
import Reaction from "react-dom"
import './header.css'
export default function Temporary(){
    return(
        
      <div className="contacts">
        
      <div className="contact-card">
          <img src={require('./images/mr-whiskerson.png')}></img>
          <h3>Mr. Whiskerson</h3>
          <div className="info-group">
              <img src={require('./images/phone-icon.png')} ></img>
              <p>(212) 555-1234</p>
          </div>
          <div className="info-group">
              <img src={require('./images/mail-icon.png')}></img>
              <p>mr.whiskaz@catnap.meow</p>
          </div>
      </div>
      
      <div className="contact-card">
          <img src={require('./images/fluffykins.png')}></img>
          <h3>Fluffykins</h3>
          <div className="info-group">
              <img src={require('./images/phone-icon.png')} />
              <p>(212) 555-2345</p>
          </div>
          <div className="info-group">
              <img src={require('./images/mail-icon.png')} />
              <p>fluff@me.com</p>
          </div>
      </div>
      
      <div className="contact-card">
          <img src={require('./images/felix.png')}/>
          <h3>Felix</h3>
          <div className="info-group">
              <img src={require('./images/phone-icon.png')}/>
              <p>(212) 555-4567</p>
          </div>
          <div className="info-group">
              <img src={require('./images/mail-icon.png')}/>
              <p>thecat@hotmail.com</p>
          </div>
      </div>
      
      <div className="contact-card">
          <img src={require('./images/pumpkin.png')}/>
          <h3>Pumpkin</h3>
          <div className="info-group">
              <img src={require('./images/phone-icon.png')}/>
              <p>(0800) CAT KING</p>
          </div>
          <div className="info-group">
              <img src={require('./images/mail-icon.png')}/>
              <p>pumpkin@scrimba.com</p>
          </div>
      </div>
      
  </div>
)
}
    