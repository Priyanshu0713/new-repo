// import logo from './logo.svg';
import './App.css';
import './signin.css'
import './signup.css'
import Homepage from './homepage'; 
import './homepage.css'
import Signin from './signin';
import Signup from './signup';
import { BrowserRouter, Route, Routes ,Switch} from 'react-router-dom';
// import { Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      
       <Route exact path="/" element={<Homepage />} />
       <Route path="/Signin" element={<Signin />} />
       <Route path="/signup" element={<Signup />} />
       
    </Routes>
 </BrowserRouter>
  );
}

export default App;