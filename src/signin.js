import React from 'react';
import {BsSpotify} from "react-icons/bs";
import {Link} from 'react-router-dom';


function Signin(){
  return(
    <div className="Signin">
        <header className="Signin-header">
            <p><BsSpotify/> Spotify </p>
        
        </header>
       
       
     <form>

     <nav class="SIGN">
            <ul>
                <li class="signin"><Link to="/Signin">SIGN IN</Link></li>
                <li class="slash"> / </li>
                <li class="signup"><Link to="/Signup">SIGN UP</Link></li>
            </ul>
        </nav>
        
          <br/><input type="text" placeholder="Username" class="user" required></input><br/>
          <input type="password" placeholder="Password" class="pass" required></input><br/>
    
    <div class="check"><br/>
          <input type="checkbox" value="check"></input>
          <label class="stay">stay sign in</label>
    </div>
    <br/><br/>

    <input type="submit" value="Sign in" class="submit"></input>       
        <br/><a href="" class="forget">Forgot Password?</a>
        
     </form>
     
    </div>
  )
}
export default Signin;
