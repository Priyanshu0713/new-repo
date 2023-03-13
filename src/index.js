import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

import './UI/homeUi.css';

import './InterestCalc.css';

import './animation'

// import AnimationStyle from './anim2';
import Demostyle from './demostyle'
// import Printphno from './printphno';
import { BrowserRouter, Route, Routes ,Switch} from 'react-router-dom';
import './cityTable.css';
import CityTable from './cityTableDemo'

import New_project from './Mini Project/new_project';
import Homepage from './homepage';
import './homepage.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <Home/> */}
    {/* <Signinn/> */}
    {/* <Homepage/> */}
   
    {/* <Usestatedemo/> */}
    {/* <HomeUi/> */}
    <App/>
    {/* <New_project/> */}
    {/* <InterestCalc/> */}
    {/* <Animation/> */}
    {/* <Demostyle/> */}
      {/* <CityTable/> */}
    {/* <AnimationStyle /> */}
    {/* <ProgressiveSignupForm/> */}
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
