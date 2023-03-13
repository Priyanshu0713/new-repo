import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsSpotify } from "react-icons/bs";
import mits from "./mits.jpg";
import site2 from "./site2.jpg";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function New_project() {
  const [showOptions, setShowOptions] = useState(false);
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);
  const [showOptions3, setShowOptions3] = useState(false);
  const [showOptions4, setShowOptions4] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  const handleClick1 = () => {
    setShowOptions1(!showOptions1);
  };
  const handleClick2 = () => {
    setShowOptions2(!showOptions2);
  };
  const handleClick3 = () => {
    setShowOptions3(!showOptions3);
  };
  const handleClick4 = () => {
    setShowOptions4(!showOptions4);
  };

  const mitsmoodle = {
    fontSize: "1.1rem",
    color: "rgb(234, 234, 213)",
  };

  return (
    <div>
      <>
        <>
          <>
            <>
              <>
                <>
                  <ul className="Navbar">
                    <li>
                      <Link to="#">
                        {" "}
                        <a style={mitsmoodle}>mitsmoodle</a>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <a href="#" onClick={handleClick}>
                        Important Link
                      </a>
                      {showOptions && (
                        <div className="dropdown">
                          <Link to="/Signup_page">
                            <a>MITS website</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>IMS Login</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Swayam NPTEL</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>NPTEL Local Chapter</a>
                          </Link>
                          <br />
                        </div>
                      )}
                    </li>
                    <li>
                      <a href="#" onClick={handleClick1}>
                        Notice Board
                      </a>
                      {showOptions1 && (
                        <div className="dropdown">
                          <Link to="/Signup_page">
                            <a>Students No dues 2022</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Lost & Found</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Students Notice Board</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Faculty Notice Board</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Feedback</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>HR</a>
                          </Link>
                          <br />
                        </div>
                      )}
                    </li>
                    <li>
                      <a href="#" onClick={handleClick2}>
                        Virtual Labs
                      </a>
                      {showOptions2 && (
                        <div className="dropdown">
                          <Link to="/Signup_page">
                            <a>Virtual Labs MHRD</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Virtual Labs Development</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Electronics & Communications</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Computer Science & Engineering</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Electrical Engineering</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Mechanical Engineering</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Chemical Engineering</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Biotechnology and Biomedical Engineering</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Civil Engineering</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Physical Engineering</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Chemical Sciences</a>
                          </Link>
                          <br />
                        </div>
                      )}
                    </li>
                    <li>
                      <a href="#" onClick={handleClick3}>
                        T&P,Counselling Cell & Clubs
                      </a>
                      {showOptions3 && (
                        <div className="dropdown">
                          <Link to="/Signup_page">
                            <a>Training and placement</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Counselling Cell</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Professional Courses</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Clubs</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Girls Grievance Cell</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Start-Up Cell</a>
                          </Link>
                          <br />
                        </div>
                      )}
                    </li>
                    <li>
                      <a href="#" onClick={handleClick4}>
                        EXAM & LIBRARY
                      </a>
                      {showOptions4 && (
                        <div className="dropdown">
                          <Link to="/Signup_page">
                            <a>Exam Conduction</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Exam Feedback</a>
                          </Link>
                          <br />
                          <Link to="#">
                            <a>Central Library</a>
                          </Link>
                          <br />
                        </div>
                      )}
                    </li>
                    <li>
                      <a href="#">Moodle 2020</a>
                    </li>
                    <li className="Log_in">
                      You are not logged in.
                      <Link>
                        <a>(Log in)</a>
                      </Link>
                    </li>
                  </ul>
                  <br />
                </>
                <>
                  <div
                    style={{
                      border: "1px solid rgb(136, 132, 127)",
                      position: "absolute",
                      left: "0.5%",
                      right: "1.2%",
                      borderRadius:"5px 5px",
                      height: "20%",
                      width: "98%",
                    }}
                  >
                    <div className="img" style={{
                       position: "relative",
                       left: "2.5%",
                       right: "2.2%",
                       top:"25%",
                       borderRadius:"5px 5px",
                      
                    }}>
                      <img src={mits} alt="mits_img" />
                    </div>
                    <div className="home">
                      <Link>
                        <a>Home</a>
                      </Link>
                    </div>
                  </div>
                  <br />
                </>
              </>
              <>
                <div
                  style={{
                    border: "1px solid rgb(136, 132, 127)",
                    width: "262px",
                    position: "absolute",
                    left: "0.5%",
                    top: "33%",
                    backgroundColor: "#f8f9fa",
                    borderRadius:"5px 5px",
                  }}
                >
                  <div className="Navigation">
                    <p>Navigation</p>
                    <ul style={{ listStyleType: "none" }}>
                      <li style={{ fontWeight: "700" }}>
                        <Link>
                          <a>Home</a>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <a>Site Links</a>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <a>Courses</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            </>
            <>
              <div
                style={{
                  border: "1px solid rgb(136, 132, 127)",
                  width: "280px",
                  height: "290px",
                  position: "absolute",
                  right: "1.3%",
                  top: "33%",
                  backgroundColor: "#f8f9fa",
                  borderRadius:"5px 5px",
                }}
              >
                <div className="Welcome">
                  <p>Welcome to </p>
                  <Link>
                    <h2
                      style={{
                        listStyleType: "none",
                        fontSize: 20,
                        fontWeight: "normal",
                        borderRadius:"5px 5px",
                      }}
                    >
                      <a>Madhav Institute of Technology & Science, Gwalior</a>
                    </h2>
                  </Link>
                  <p style={{ fontSize: 20, fontWeight: 300 }}>
                    (A Govt. Aided UGC Autonomous & NAAC Accredited Institute
                    Affiliated to RGPV, Bhopal)
                  </p>
                </div>
              </div>
            </>
          </>
          <>
            <div className="calender">
              <div
                style={{
                  border: "1px solid rgb(136, 132, 127)",
                  width: "280px",
                  height: "370px",
                  backgroundColor: "#f8f9fa",
                  borderRadius:"5px 5px",
                }}
              >
                <div className="calender1">
                  <p>Calendar </p>
                  <div>
                    <FullCalendar
                      plugins={[dayGridPlugin]}
                      initialView="dayGridMonth"
                      events={[
                        { title: "Event 1", date: "2023-02-27" },
                        { title: "Event 2", date: "2023-03-03" },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        </>
        <>
          <div className="Upcomming">
            <div
              style={{
                border: "1px solid rgb(136, 132, 127)",
                width: "280px",
                height: "200px",
                backgroundColor: "#f8f9fa",
                borderRadius:"5px 5px",
              }}
            >
              <div className="Upcomming1">
                <div>
                  <p>Upcoming events</p>
                </div>
                <div>
                  <p>There is no upcomming events</p>
                  <Link>
                    <a>Go to calandar</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
        <>
          <div className="site">
            <div
              style={{
                border: "1px solid rgb(136, 132, 127)",
                width: "99%",
                // backgroundColor: "#f8f9fa",
                borderRadius:"5px 5px",
              }}
            >
              <div className="site_news">
                <p>Site news</p>
                <div
                  className="news_updates"
                  style={{
                    border: "1px solid rgb(136, 132, 127)",
                    width: "100%",
                    // backgroundColor: "#f8f9fa",
                  }}
                >
                  <img className="site_img" src={site2} alt="site_img"></img>
                </div>
              </div>
            </div>
          </div>
        </>
      </>

      <>
        <div className="latest">
          <div
            style={{
              border: "1px solid rgb(136, 132, 127)",
              width: "260px",
              height: "50%",
              backgroundColor: "#f8f9fa",
              borderRadius:"5px 5px",
            }}
          >
            <div className="latest1">
            <p
              style={{
                fontSize: 20,
                fontWeight: 200,
              }}
            >
              Latest announcements
            </p>
            <br />
            <p>16 Feb, 21:46 Atul Chauhan</p>
            <Link>
              <a>Students Satisfaction Survey by NACC</a>
            </Link>
            <p>23 Jan, 13:50 Atul Chauhan</p>
            <Link>
              <a>Library Notice</a>
            </Link>
            <p>13 Jan, 16:12 Vikram Singh Rajput</p>
            <Link>
              <a>
                Wipro earthian 2022 Sustainability Quiz:- Participate/Win/Get an
                Addition to write in your Profile
              </a>
            </Link>
            <p>4 Jan, 12:04 Vikram Singh Rajput</p>
            <Link>
              <a>
                REMINDER; For All students:- CodeAgon by Trilogy (Earlier was
                Codenation) // Participate and get a Chance of Placement at Rs.
                36.0 LPA
              </a>
              </Link><br/><br/>
              <Link>
              <a>Older topics....</a>
            </Link>
           </div>       
          </div>
        </div>
      </>
    </div>
  );
}
export default New_project;
