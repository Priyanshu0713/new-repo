import React from "react";
import { Link } from "react-router-dom";
import { BsSpotify } from "react-icons/bs";

function Login_page(){
    return(
    
    <div >
    <header >
        <p> Login </p>
    
    </header>
   
   
 <form>

 <nav >
        <ul>
            <li ><Link to="/Signin">SIGN IN</Link></li>
            <li > / </li>
            <li ><Link to="/Signup">SIGN UP</Link></li>
        </ul>
    </nav>
    
      <br/><input type="text" placeholder="Username" class="user" required></input><br/>
      <input type="password" placeholder="Password" class="pass" required></input><br/>

<div class="check"><br/>
      <input type="checkbox" value="check"></input>
      <label class="stay">stay sign in</label>
</div>
<br/><br/>

<input type="submit" value="Sign in" ></input>       
    <br/><a href="" class="forget">Forgot Password?</a>
    
 </form>
 
</div>
    )
}
 export default Login_page;