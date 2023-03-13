// import logo from './logo.svg';
import './App.css';
// import './signin.css'
// import './signup.css'
// import Homepage from './homepage'; 
// import './homepage.css'
// // import Signin from './signin';
// // import Signup from './signup';

// // import HomeUi from './UI/homeUi';
// // import './UI/homeUi.css'

// // import New_project from './Mini Project/new_project';
// // import './Mini Project/new_project.css'
// // import Login_page from './Mini Project/login_page';
// // import Signup_page from './Mini Project/signup_page';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// import Homepage_carwale from './carwale/homepage_carwale';
// import './carwale/homepage_carwale.css'

// import Hashtag_home from './hashtag/hashtag_home'
// import './hashtag/hashtag_home.css';

import Hashtag_home2 from './hashtag/2hashtag_home'
import './hashtag/2hashtag_home.css';

import Riccardo from './hashtag/riccardo'
import './hashtag/riccardo.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
       {/* <Route path="/" element={<HomeUi />} /> */}
       {/* <Route path='/Home' element={<Signin/>}/> */}
       {/* <Route path="/Wallet" element={<Signin />} /> */}
       {/* <Route path="/Refer & Earn" element={<Signin />} /> */}
       {/* <Route path="/Profile" element={<Signin />} /> */}
       {/* <Route path="/Recent" element={<Signin />} /> */}
     
        {/* <Route path="/" element={<New_project/>}/>
        <Route path="/login_page" element={<Login_page />} />
        <Route path="/Signup_page" element={<Signup_page/>}/> */}

        {/* <Route path="/" element={<Homepage_carwale/>}></Route> */}
        {/* <Route path="/" element={<Hashtag_home/>}></Route> */}
        <Route path="/" element={<Hashtag_home2/>}></Route>
        {/* <Route path="/" element={<Riccardo/>}></Route> */}
    </Routes>
 </BrowserRouter>
  );
}

export default App;