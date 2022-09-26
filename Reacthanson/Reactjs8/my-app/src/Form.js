import React from "react"
import "./Form.css"
export default function Form() 
{  const [firstName,setFirstName]=React.useState("")

const [lastName, setLastName] = React.useState("")
const [email, setemail] = React.useState("")
const [comments, setcomments] = React.useState("")
const [isFriendly, setisFriendly] = React.useState("")
console.log(firstName)
function handleFirstNameChange(event)
{
// console.log(event.target.value)
setFirstName(event.target.value)
}
function handleLastNameChange(event) {
    setLastName(event.target.value)
}
function emailChange(event) {
    setemail(event.target.value)
}
function commentchange(event) {
    setcomments(event.target.value)
}
function handleChange(event) {
    setisFriendly(event.target.checked)
}
    return (
      
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFirstNameChange}
                value={FormData.firstName}
            />
               <input
                type="email"
                placeholder="Email"
                onChange={emailChange}
                name="email"
                value={FormData.email}
            />
                   <input
                type="Comments..."
                placeholder="Last Name"
                onChange={commentchange}
                name="comments"
                value={FormData.comments}
            />
              <input
                type="checkbox"
                id="isFriendly"
                checked={FormData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are You friendly</label>
        </form>
    )
}
