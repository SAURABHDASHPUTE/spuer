import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Routes,Route ,Link} from 'react-router-dom';
import Menu from '../Menu/Menu';
import Intraday from '../../Pages/Intraday/Intraday';
import Swing from '../../Pages/Swing/Swing';
import Longterm from '../../Pages/LongTerm/Longterm';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css';
import Trending from '../../Pages/Trending/Trending';

// render Route inside Body Component
export default function Header() {
  
  return  <>
        <Router >
          <div className='container'></div>
          <div className='Header  row justify-content-start '>
            <h4 className='col-3'><Link to='/Intraday ' className='link ' >Intraday</Link></h4>
            <h4 className='col-3'><Link to='/Swing' className='link  ' >Swing</Link></h4>
            <h4 className='col-3'><Link to='/Trending' className='link ' >Trending</Link></h4>
            <h4 className='col-3'><Link to='/LongTerm' className='link  ' >LongTerm</Link></h4>
        </div>

        <Menu><Routes>


        <Route path='/Intraday' Component={Intraday}/>
        <Route path='/Swing' Component={Swing}/>
        <Route path='/LongTerm' Component={Longterm}/>
        <Route path='/Trending' Component={Trending}/>
        </Routes>
       </Menu>
        </Router>

        
        </>
}
