import { useState } from "react"
import './General.css'

export default function General(props){
   let [show,setShow]=useState(false);
  let handleShow=()=>{
    setShow(!show)
  }
  let [save,setSave]=useState(false);
  let handleSave=()=>{
    setSave(!save)
 
  }

    return (
        <>
        <div className="general">
        <div> <h2>General Information <button onClick={handleShow}>{show===false? 'Show' :'Hide'}</button></h2></div>
        <div> 
            { show &&   <form onSubmit={props.handleSubmit}>
        <label htmlFor="fullName">Full Name</label><br />
        <input type="text" placeholder="Full Name" name="fullName"  id="fullName" onChange={props.handleInputChange} /><br />
        <label htmlFor="currently"></label><br />
        <input type="text" placeholder="Full Stack Developer" name="currently"  id="currently" onChange={props.handleInputChange} /><br /><br />
        
        <label htmlFor="email">Email</label><br />
        <input type="text" name="email" id="email" placeholder="email"  onChange={props.handleInputChange}  /> <br /><br />
        <label htmlFor="phoneNumber">Phone Number</label><br />
        <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number"  onChange={props.handleInputChange} />
        <br /><br />
        <label htmlFor="city">City</label><br />
        <input type="text" name="city" id="city" placeholder="Enter City"  onChange={props.handleInputChange} /><br />
        <button onClick={handleSave}>{save===false?'Save':'Saved'}</button>
        <hr />
       </form>}
     
        </div>
        </div>
   
        </>
    )
}