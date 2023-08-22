import React, { useState } from 'react'
import './Intraday.css';
import { Link } from 'react-router-dom';
import Ibanks from '../../IntradayNews/Ibanks/Ibanks';
import Main from '../../Components/Main/Main';
import Iit from '../../IntradayNews/IIT/Iit';
import Imetal from '../../IntradayNews/Imetal/Imetal';
import Ipharma from '../../IntradayNews/Ipharma/Ipharma';
import Imotor from '../../IntradayNews/Imotor/Imotor';
import { Router,Routes,Route } from 'react-router-dom';

export default function Intraday() {
  const [page,setpage] = useState();
  function fnclick(i){
    setpage(i);
  }
  return (<>
    <div>
       <ol className='oli row'>
        <li onClick={()=>{fnclick('banks')}} className='row'>Banks</li>
        <li onClick={()=>{fnclick('IT')}} className='row'>IT</li>
        <li onClick={()=>{fnclick('Metal')}} className='row'>Metal</li>
        <li onClick={()=>{fnclick('Pharma')}}className='row'>Pharma</li>
        <li onClick={()=>{fnclick('Motor')}} className='row'>Motor</li>
        
       </ol>
  
    </div>
    <Main>
      
      
      
      {page==='banks' &&  <Ibanks/>}
      {page==='IT' &&  <Iit/>}
      {page==='Metal' &&  <Imetal/>}
      {page==='Pharma' &&  <Ipharma/>}
      {page==='Motor' &&  <Imotor/>}
    </Main>
    </>

  )
}
