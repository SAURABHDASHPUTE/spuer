import React, { useState } from 'react';
import Lbanks from '../../LongtermNews/Lbanks/Lbanks'
import Lmetal from '../../LongtermNews/Lmetal/Lmetal'
import Lit from '../../LongtermNews/LIT/Lit';
import Lpharma from '../../LongtermNews/Lpharma/Lpharma'
import Lmotor from '../../LongtermNews/Lmotor/Lmotor';
import Main from '../../Components/Main/Main';

export default function Longterm() {
  const [page,setpage] = useState();

  function fnclick(i){
      setpage(i);
  }
  return (
    <div>
    <div>
       <ol className='oll row'>
        <li onClick={()=>{fnclick('banks')}} className='row'>Banks</li>
        <li onClick={()=>{fnclick('IT')}} className='row'>IT</li>
        <li onClick={()=>{fnclick('Metal')}} className='row'>Metal</li>
        <li onClick={()=>{fnclick('Pharma')}}className='row'>Pharma</li>
        <li onClick={()=>{fnclick('Motor')}} className='row'>Motor</li>
        
       </ol>
  
    </div>
    <Main>
      {page==='banks' &&  <Lbanks/>}
      {page==='IT' &&  <Lit/>}
      {page==='Metal' &&  <Lmetal/>}
      {page==='Pharma' &&  <Lpharma/>}
      {page==='Motor' &&  <Lmotor/>}
    </Main>

 </div>
  )
}
