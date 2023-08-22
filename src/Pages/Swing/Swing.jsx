import React, {useState} from 'react'
import './Swing.css';
import Main from '../../Components/Main/Main';
import Sbank from '../../Swingnews/Sbanks/Sbank';
import Sit from '../../Swingnews/Sit/Sit';
import Smetal from '../../Swingnews/Smetal/Smetal';
import Spharma from '../../Swingnews/Spharma/Spharma';
import Smotor from '../../Swingnews/Smotor/Smotor';


export default function Swing() {
  const [page,setpage] = useState();

  function fnclick(i){
      setpage(i);
  }
  return (
    <div>
    <div>
       <ol className='ols row'>
        <li onClick={()=>{fnclick('banks')}} className='row'>Banks</li>
        <li onClick={()=>{fnclick('IT')}} className='row'>IT</li>
        <li onClick={()=>{fnclick('Metal')}} className='row'>Metal</li>
        <li onClick={()=>{fnclick('Pharma')}}className='row'>Pharma</li>
        <li onClick={()=>{fnclick('Motor')}} className='row'>Motor</li>
        
       </ol>
  
    </div>
    <Main>
      {page==='banks' &&  <Sbank/>}
      {page==='IT' &&  <Sit/>}
      {page==='Metal' &&  <Smetal/>}
      {page==='Pharma' &&  <Spharma/>}
      {page==='Motor' &&  <Smotor/>}
    </Main>

 </div>
  )
}
