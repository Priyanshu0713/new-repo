// import logo from './logo.svg';
import './App.css';
import './signin.css'
import './signup.css'
import Homepage from './homepage'; 
import './homepage.css'
import Signin from './signin';
import Signup from './signup';

import HomeUi from './UI/homeUi';
import './UI/homeUi.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      
       <Route path="/" element={<HomeUi />} />
       <Route path='/Home' element={<Signin/>}/>
       <Route path="/Wallet" element={<Signin />} />
       <Route path="/Refer & Earn" element={<Signin />} />
       <Route path="/Profile" element={<Signin />} />
       <Route path="/Recent" element={<Signin />} />
       
    </Routes>
 </BrowserRouter>
  );
}

export default App;