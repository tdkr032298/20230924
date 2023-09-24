import React from 'react';
import {BrowserRouter} from 'react-router-dom';


import './App.css';
import Headbar from './Component/Molculs/Headbar';
import Sidebar from './Component/Molculs/Sidebar';
import { Router } from './Component/Router/Router';


function App ()  {
  return (
    <BrowserRouter>
    <div className='h-screen'>
        <Router/>
    </div>
    </BrowserRouter>
  );
}

export default App;
