 import { useState } from "react"
import './Experience.css'
export default function Experience(props){
    let [show,setShow]=useState(false);
    let handleShow=()=>{
      setShow(!show)
    }
    return (
        <>
        <div className="experience">
        <div><h2>Experience Information <button onClick={handleShow}>{show===false? 'Show':'Hide'}</button></h2></div>
            <div>
                { show && <form onSubmit={props.handleSubmit}>
                <label htmlFor="companyName">Company Name</label><br />
                <input type="text" name="companyName" id="companyName"  onChange={props.handleInputChange}  placeholder="Company Name"/>
                <br /><br />
                <label htmlFor="position">Position Title</label><br />
                <input type="text" name="position" id="position"  onChange={props.handleInputChange} placeholder="Job-Position"/>
            
                <br /><br />
                <label htmlFor="description">Description</label><br />
                <input type="text" name="description" id="description" placeholder="Enter Description"  onChange={props.handleInputChange}/>
                <br /><br />
                <label htmlFor="start"> Start Date</label><br />
                <input type="date" name="start" id="start"  placeholder="Enter Start Date" onChange={props.handleInputChange}/>
                <br /><br />
                <label htmlFor="end">End Date</label><br />
                <input type="date" name="end" id="end"  placeholder="Enter End Date" onChange={props.handleInputChange}/><br />
                <button>Submit</button>
                
            </form>}
            
        </div>
        </div>
             
        </>
    )
}