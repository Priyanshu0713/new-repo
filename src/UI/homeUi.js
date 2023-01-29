import React from 'react'
import { Link } from "react-router-dom";

function HomeUi(){
    return(
        <div className='whole-page'>
            
        <h3 className='header'>NEXT-INOVATION</h3>
        
        <button className='btn'>PLAY</button><br/>
        <button className='btn2'>HOW TO PLAY</button>
        <div className='navbar'>
                <ul className='bar'>
                    <li><Link to="/Sigin"><a>Home</a></Link></li>
                    <li><Link to="/Sigin"><a>Wallet</a></Link></li>
                    <li><Link to="/Sigin"><a>Refer & Earn</a></Link></li>
                    <li><Link to="/Sigin"><a>Profile</a></Link></li>
                    <li><Link to='/Signin'><a>Recent</a></Link></li>
                </ul>
            </div>

        </div>
    )
}
export default HomeUi;