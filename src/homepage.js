import React from "react";
import { Link } from "react-router-dom";
import {GiHummingbird} from "react-icons/gi";
import {GiCarWheel} from "react-icons/gi";
import {GiSteeringWheel} from "react-icons/gi";
import myImage from './my-image.jpg'


function Homepage(){
    return(
      <div className="Full-page ">
        <style>{'body{background-color:gray;}'}</style>
          <header className="Our-mission ">
            <h3 className="our">Our Mission</h3>
              Bringing togather people who care about climate
                <br/>change and saving lies in the Arctic.
          </header>
        <ul className="List-item" >
            
           <li ><GiHummingbird size="40"/> <h4>Explore the are</h4>
            Explore the place that are extraordinary to<br/>
              examine the life of species there.
           </li>      
           <li  className="stay-over"><GiSteeringWheel size="40"/> <h4>Stay overnight</h4>
            You will stay there for weeks with<br/>
              experts and researcheers who will join this 
              Mission.
            </li>
            <li  className="save-the"><GiCarWheel size="40"/> <h4>Save the species</h4>
            
              join volunteering in the Mission to Save<br/>
              endangered species there.
            </li>
         
         </ul>   
         <h2 className="about-expend">About expendition</h2>
      <div className="about-class">
            This expendition is a program of international
              organization engaged in the environment.
              we will explore parts of the north pole 
             that are being threatened by the north pole that 
              are being threatened by the severity of global
             warming and br one of the people who
               helping to saving the earth.
         
            <img className="image" src={myImage} alt='My Image' />

      </div>
       <form>
  
       <nav class="in-up ">
              <ul>
                  <li className=""><Link to="/Signin">SIGN IN</Link></li>
                  <br/><br/>
              </ul>
          </nav>
          
       </form>
       
      </div>
    )
  }
  export default Homepage;