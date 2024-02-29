import React from 'react'
import './Resume.css'
// import EmailIcon from '@mui/icons-material/Email';
// import CallIcon from '@mui/icons-material/Call';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import html2canvas from 'html2canvas';

export default function Resume (props){
  const pdfRef = useRef();

  const downloadPDF = () =>{
    const input = pdfRef.current;
    html2canvas(input).then((canvas)=>{
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('Resume.pdf')
    
    });
};

  return (
    <>
        <div className='resume' ref={pdfRef}>
       
        <div className='general-info'>
            <div className='left'>
           <div className='name'>{props.data.fullName} </div>
           <div className='currently'> ~{props.data.currently}</div> 
            </div>
        </div>
        <hr />
       
        <div className='exep'>
          <h2 className='exep-head'>Experience </h2>
          <div className='companyName'>{props.data.companyName}</div>
          <div className='position'>{props.data.position}</div>
          <div className='description'>{props.data.description}</div>
          <div className='start'>{props.data.start}</div>
          <div className='end'>{props.data.end}</div>
         </div>
         <div className='education'>
          <h2 className='edu-head'>Education </h2>
          <div className='university'>{props.data.schoolName}</div>
          <div className='degree'>{props.data.degree}</div>
          <div className='city'>{props.data.city}</div>
          <div className='startStudy'>{props.data.startStudy}</div>
          <div className='endStudy'>{props.data.endStudy}</div>
         </div>

         <div className='contact'>
          <h2 className='contact-head'>Contact</h2>
         <div className='email'> { props.data.email   }</div>
         <div className='phone'> {props.data.phoneNumber }</div>
         <div className='email'> {props.data.city }</div>
            </div>
    </div>
  <div className='download'>
  <button className='download' onClick={downloadPDF}>Download PDF</button>
  </div>
  
    </>

  )
}


