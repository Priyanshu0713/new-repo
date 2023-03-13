import React from "react";
import carwale from "./carwale.png";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FaLanguage from "@mui/icons-material/Language";
import IoLocationOutline from "@mui/icons-material/LocationOnOutlined";
import CiSearch from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState } from "react";
import thar from "./thar.jpg";
import scorpio from "./scorpio.jpg";
import brezza from "./brezza.jpg";
import citroen from "./citroen.jpg";
import ignis from "./ignis.jpg";
import safari from "./safari.jpg";
import city from "./city.jpg";
import verna from "./verna.jpg";
import innova from "./innova.jpg";
import ss from "./ss.png";


import { positions } from "@mui/system";



function Homepage_carwale() {
  const [showOptions, setShowOptions] = useState(true);
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  const handleClick1 = () => {
    setShowOptions1(!showOptions1);
  };
  const handleClick2 = () => {
    setShowOptions2(!showOptions2);
  };
  return (
    <>
      <div className="car_logo">
        <Link to="#">
          <a>
            <img className="img_carwale" src={carwale} alt="carwale"></img>
          </a>
        </Link>
        <div className="nav_bar">
          <ul>
            <li className="dropdown">
              <a href="#">NEW CARS</a>
              <div className="dropdown-content">
                <a href="#">Find New Cars</a>
                <a href="#">Check ON-Road Price</a>
                <a href="#">Upcomming Cars</a>
                <a href="#">New Car Loan</a>
                <a href="#">New Launches</a>
                <a href="#">Electric Cars</a>
                <a href="#">Compare Cars</a>
                <a href="#">Find Dealer</a>
                <a href="#">New Car Offers</a>
                <a href="#">Popular Brands</a>
                <a href="#">EMII Calculator</a>
                <a href="#">Car Accessories</a>
              </div>
            </li>
            <li className="dropdown1">
              <a href="#">USED CARS</a>
              <div className="dropdown-content1">
                <a href="#"> Buy Used Cars</a>
                <a href="#">CarWale abSure</a>
                <a href="#">Check Car Valuation</a>
                <a href="#">Sell Your Car</a>
                <a href="#">Used Car Lone</a>
                <a href="#">Explore Used Cars</a>
                <a href="#">Find Dealers</a>
                <a href="#">My Listings</a>
                <a href="#">Insurance</a>
              </div>
            </li>
            <li className="dropdown2">
              <a href="#">REVIEWS & NEWS</a>
              <div className="dropdown-content2">
                <a href="#">News</a>
                <a href="#">Expert Reviews</a>
                <a href="#">User Reviews</a>
                <a href="#">Webstories</a>
                <a href="#">Special Reports</a>
                <a href="#">Images</a>
                <a href="#">Videos</a>
                <a href="#">Tips And Advice</a>
              </div>
            </li>
          </ul>
          <div className="icons" style={{}}>
            <Link>
              <a>
                <AccountCircle
                  sx={{
                    color: "#d32424",
                    mr: 2,
                    my: 0.5,
                    height: "35px",
                    width: "50px",
                    color: "disabled",
                  }}
                  color="action"
                />
              </a>
            </Link>
          </div>
          <div className="icons1">
            <Link>
              <a>
                <FaLanguage
                  sx={{
                    color: "#d32424",
                    mr: 2,
                    my: 0.5,
                    height: "35px",
                    width: "50px",
                    color: "disabled",
                  }}
                  color="action"
                />{" "}
              </a>
            </Link>
          </div>
          <div className="icons2">
            <Link>
              <a>
                <IoLocationOutline
                  sx={{
                    color: "#d32424",
                    mr: 2,
                    my: 0.5,
                    height: "35px",
                    width: "50px",
                    color: "disabled",
                  }}
                  color="action"
                />
              </a>
            </Link>
          </div>
          <div>
            <input
              type="search"
              placeholder="Search"
              style={{
                height: "30%",
                width: "35%",
              }}
              className="search"
            />
          </div>
        </div>
      </div>
      <div>
      <img src={ss} style={{
      // border: "1px solid rgb(136, 132, 127)",
      width: "100%",
      height:"80%",
      position: "absolute",
      top: "10%",
      }}/>  
      </div>        

      {/* // >>>>>>>>>>>>>>>-----Featured Cars */}
      <h2 style={{position:"absolute",
      left:"10%",
      top:"92%",}}>Featured Cars</h2>
      <div className="featured">
      
        <ul>
          <li><Link  onClick={handleClick}>
            POPULAR
            </Link>
            {showOptions && (
              <div style={{
                display:"flex",
              width:"1px"
              }}>
                
                <Link>
                  <a style={{}}><img style={{
                     border: "1px solid rgb(136, 132, 127)",
                     width: "262px",
                  }} src={thar}/><br/>Mahindra Thar<br/>
                  ₹ 9.99 Lakh
                  onwards<br/>
                  Avg. Ex-Showroom price<p/>
                  <Link style={{
                    color:"blue",
                    position:"absolute",
                  }}>Show price in my city</Link>
                </a>
                </Link>
                <br />
                <Link to="#">
                <a><img style={{
                     border: "1px solid rgb(136, 132, 127)",
                     width: "262px",
                  }} src={scorpio}/><br/>Mahindra scorpio<br/>
                  ₹ 12.64 Lakh
                  onwards<br/>
                  Avg. Ex-Showroom price<p/>
                  <Link style={{
                    color:"blue",
                    position:"absolute",
                  }}>Show price in my city</Link></a>
                </Link>
                <br />
                <Link to="#">
                  <a><img style={{
                     border: "1px solid rgb(136, 132, 127)",
                     width: "262px",
                  }} src={brezza}/><br/>Maruti Suzuki Brezza<br/>
                  ₹ 8.18 Lakh
                  onwards<br/>
                  Avg. Ex-Showroom price<p/>
                  <Link style={{
                    color:"blue",
                    position:"absolute",
                  }}>Show price in my city</Link></a>
                </Link>
              </div>
            )}
          </li>
          <li>
          <Link  onClick={handleClick1}>
          JUST LAUNCHED
            </Link>
            {showOptions1 && (
              <div style={{
                display:"flex",
              width:"1px"
              }}>
                
                <Link>
                  <a style={{}}><img style={{
                     border: "1px solid rgb(136, 132, 127)",
                     width: "262px",
                  }} src={citroen}/><br/>Citroen eC3<br/>
                  ₹ 11.50 Lakh
                  onwards<br/>
                  Avg. Ex-Showroom price<p/>
                  <Link style={{
                    color:"blue",
                    position:"absolute",
                  }}>Show price in my city</Link>
                </a>
                </Link>
                <br />
                <Link to="#">
                <a><img style={{
                     border: "1px solid rgb(136, 132, 127)",
                     width: "262px",
                  }} src={ignis}/><br/>Maruti Suzuki Ignis<br/>
                  ₹ 5.82 Lakh
                  onwards<br/>
                  Avg. Ex-Showroom price<p/>
                  <Link style={{
                    color:"blue",
                    position:"absolute",
                  }}>Show price in my city</Link></a>
                </Link>
                <br />
                <Link to="#">
                  <a><img style={{
                     border: "1px solid rgb(136, 132, 127)",
                     width: "262px",
                  }} src={safari}/><br/>Tata Safari<br/>
                  ₹ 15.65 Lakh
                  onwards<br/>
                  Avg. Ex-Showroom price<p/>
                  <Link style={{
                    color:"blue",
                    position:"absolute",
                  }}>Show price in my city</Link></a>
                </Link>
              </div>
            )}
          </li>
          <li>
          <Link  onClick={handleClick2}>
          UPCOMING
            </Link>
            {showOptions2 && (
              <div style={{
                display:"flex",
              width:"1px"
              }}>
                
                <Link>
                  <a style={{}}><img style={{
                     border: "1px solid rgb(136, 132, 127)",
                     width: "262px",
                  }} src={city}/><br/>Citroen eC3<br/>
                  ₹ 11.50 Lakh
                  onwards<br/>
                  Avg. Ex-Showroom price<p/>
                  <Link style={{
                    color:"blue",
                    position:"absolute",
                  }}>Show price in my city</Link>
                </a>
                </Link>
                <br />
                <Link to="#">
                <a><img style={{
                     border: "1px solid rgb(136, 132, 127)",
                     width: "262px",
                  }} src={verna}/><br/>Maruti Suzuki Ignis<br/>
                  ₹ 5.82 Lakh
                  onwards<br/>
                  Avg. Ex-Showroom price<p/>
                  <Link style={{
                    color:"blue",
                    position:"absolute",
                  }}>Show price in my city</Link></a>
                </Link>
                <br />
                <Link to="#">
                  <a><img style={{
                     border: "1px solid rgb(136, 132, 127)",
                     width: "262px",
                  }} src={innova}/><br/>Tata Safari<br/>
                  ₹ 15.65 Lakh
                  onwards<br/>
                  Avg. Ex-Showroom price<p/>
                  <Link style={{
                    color:"blue",
                    position:"absolute",
                  }}>Show price in my city</Link></a>
                </Link>
              </div>
            )}
          </li>
        </ul>
        <Link style={{
      position:"absolute",
      top:"100%",
      left:"15%",
      color:"blue",
      backgroundColor:"white",
    }}>View All Popular Cars</Link>
      </div>
    </>
  );
}
export default Homepage_carwale;
