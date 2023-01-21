import React from "react";
import {BsSpotify} from "react-icons/bs";
import { Link } from "react-router-dom";

function Signup(){
    return(
<div className="Signup">
    <header className="Signup-header">
        <h2 class="signupform">
    <BsSpotify/>Sign Up Form</h2>
    </header>
    <form>
    <div class="form">
    <label> First Name </label>
            <input type="text" maxLength="12" class="fname" placeholder="First Name" required/><br/><br/>
            <label>Last Name</label>
            <input type="text" maxLength="12" class="lname" placeholder="Last Name" required/><br/><br/>
            <label class="dob"> Date of Birth </label>
            <input type="date" required/><br/><br/>
            <label >Gender</label>
            <input type="radio" name="gender"/>
            <label>Male</label>
            <input type="radio" name="gender"/>
            <label>Female</label>
            <input type="radio" name="gender"/>
            <label>Others</label><br/>
            <br/><label>Email ID</label>
            <input type="text" class="email" placeholder="Email ID" required/><br/>
            <br/><label>Phone Number</label>
            <input type="tel" maxLength="10" class="phoneno" placeholder="Phone Number" required/><br/>
            <br/><label>Enter Password</label>
            <input type="password" class="passw" placeholder="Password" required/>
            <br/><br/><label>Confirm Password</label>
            <input type="password" class="conpass" placeholder="Confirm password" required />
            <br/><br/><input type="submit" class="submi" value="SIGN UP"/> 
    </div>  
    </form>

</div>
        
       
    )
}
export default Signup;