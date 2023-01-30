import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import Usestatedemo from './usestatedemo';

// import HomeUi from './UI/homeUi';
// import './UI/homeUi.css';

import InterestCalc from './interestCalc';
import './InterestCalc.css';

// import Printphno from './printphno';
// import { BrowserRouter, Route, Routes ,Switch} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <App /> */}
    {/* <Usestatedemo/> */}
    {/* <HomeUi/> */}
    <App/>
    {/* <InterestCalc/> */}
    {/* <InterestCalc/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
