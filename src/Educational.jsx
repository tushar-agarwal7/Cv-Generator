import { useState } from "react"
import './Educational.css'

export default function Educational(props){
    let [show,setShow]=useState(false);
    let handleShow=()=>{
      setShow(!show)
    }
    return (
        <> 
        <div className="educational">
        <div><h2>Education Experience <button onClick={handleShow}>{show===false? 'Show':'Hide'}</button></h2></div>
        <div>
            { show &&  <form onSubmit={props.handleSubmit}>
                <label htmlFor="schoolName">University </label><br />
                <input type="text" name="schoolName" id="schoolName" placeholder=" Enter School/University"  onChange={props.handleInputChange} />
                <br /><br />
                <label htmlFor="degree">Degree</label><br />
                <input type="text" name="degree" id="degree" placeholder="Enter Degree"  onChange={props.handleInputChange} /><br /><br />
               <label htmlFor="city">City</label><br />
               <input type="text" name="city" id="city" placeholder="Enter City"   onChange={props.handleInputChange}/>
               <br /><br />
                <label htmlFor="startStudy">Start of Study</label><br />
                <input type="date" name="startStudy" id="startStudy"  onChange={props.handleInputChange} /><br /><br />
                <label htmlFor="endStudy">End of Study</label><br />
                <input type="date" name="endStudy" id="endStudy"  onChange={props.handleInputChange} /><br />
                <button>Save</button>
                <hr />
            </form>}
           
        </div>
        </div>
        
        </>
    )
}