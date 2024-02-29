import { useState } from 'react'
import './App.css'
import General from './General'
import Educational from './Educational'
import Experience from './Experience'
import Resume from './Resume'
import Header from './Header'
import Footer from './Footer'
function App() {
  let [formData,setFormData]=useState({})
   let handleInputChange=(event)=>{
    console.log(formData);
    setFormData((currData)=>{
        return {...currData,[event.target.name]:event.target.value}
    })
   }
   let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(formData);
   }
  return (
    <>
     <div className='app'>
      <Header/>
      <div className='info'>
    <General handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
    <Educational handleInputChange={handleInputChange}  handleSubmit={handleSubmit}/>
    <Experience handleInputChange={handleInputChange}  handleSubmit={handleSubmit}/>
     </div>
     <div className='res'>
     <Resume data={formData}/>
     </div>
     <Footer/>
  </div>
  </>
  )
}

export default App
