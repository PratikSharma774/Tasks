import React from "react"
import "./App3.css"
export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    let starIcon=contact.isFavorite ? "./images/star-filled.png" : "./images/star-empty.png"
    function toggleFavorite() {
        // console.log("Toggle Favorite")
        setContact(prevContact =>{
            return{
                isFavorite: !prevContact.isFavorite
            }
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src={require("./images/user.png")} className="card--image" />
                <div className="card--info">
                    <img 
                        src={require("./images/star-empty.png")} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        John Doe
                    </h2>
                    <p className="card--contact">+1 (719) 555-1212</p>
                    <p className="card--contact">itsmyrealname@example.com</p>
                </div>
                
            </article>
        </main>
    )
}
