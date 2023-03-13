import React from "react";
import { Link } from "react-router-dom";
import hashtag from "./hashtag.JPG";
import mf_avatar from "./mf_avatar.jpg";
import one from "./one.JPG";
import two from "./two.JPG";
import three from "./three.JPG";

import computer from "./computer.JPG";
import MessageTwoTone from "@mui/icons-material/MessageTwoTone";
import HandshakeSharp from "@mui/icons-material/HandshakeSharp"

function Hashtag_home() {
  return (
    <><><><><>
          <>
              <>
              <div className="hash_navbar">
                  <div className="hashtag_navbar">
                      <img className="img404"
                          src={hashtag}
                          style={{
                              // border: "1px solid brown",
                              width: "7%",
                              height: "7%",
                              position: "absolute",
                              top: "2%",
                              left: "4%",
                              listStyle: "none",
                          }} />
                      <Link>
                          <a>Mentorship</a>
                      </Link>
                      <div className="say">
                          <Link
                              style={{
                                  border: "0.5px solid #6E07F3",
                                  borderRadius: "30px",
                                  width: "90px",
                                  height: "10px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  //   borderRadius
                                  //   borderWidth: "5px",
                                  //   backgroundColor:"blue",
                                  padding: "15px",
                                  position: "absolute",
                                  top: "5.5%",
                                  right: "5%",
                                  listStyle: "none",
                              }}
                          >
                              Say Hello
                          </Link>
                      </div>
                    </div>
                </div>
                  <div className="hashtag_heading">
                      <h3
                          style={{
                              fontSize: 45,
                              position: "absolute",
                              top: "15%",
                              left: "21%",
                          }}
                      >
                          Designer, Frontend Developer & Mentor
                      </h3>
                      <h
                          style={{
                              fontSize: 25,
                              position: "absolute",
                              top: "32%",
                              left: "26%",
                          }}
                      >
                          I design and code beautifully simple things, and I love what I do.
                      </h>
                      <img
                          src={mf_avatar}
                          style={{
                              width: "25%",
                              height: "40%",
                              position: "absolute",
                              top: "40%",
                              left: "35%",
                              alignItems: "center",
                          }} />
                      <img
                          src={computer}
                          style={{
                              width: "60%",
                              height: "50%",
                              position: "absolute",
                              top: "90%",
                              left: "20%",
                              alignItems: "center",
                          }} />
                  </div>
              </>
              <div className="blue_bar">
                  <div className="blue_bar_content">
                      <h1>Hi, I’m Matt. Nice to meet you.</h1>
                      <p>
                          Since beginning my journey as a freelance designer over 11 years
                          ago, I've done remote work for agencies, consulted for startups,
                          and collaborated with talented people to create digital products
                          for both business and consumer use. I'm quietly confident,
                          naturally curious, and perpetually working on improving my chops
                          one design problem at a time.
                      </p>
                  </div>
              </div>
          </>
          <div className="designer">
              <div
                  style={{
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                      border: "0.5px solid brown",
                      width: "30%",
                      lineHeight: "237.5%",
                      position: "absolute",
                      left: "5%",
                      top: "30%",
                      backgroundColor: "white",
                      borderRadius: "20px 0px 0px 0px",
                  }}
              >
                  <ul
                      className="designer_content"
                      style={{
                          padding: "20px",
                          fontSize: "18px",
                          color: "#333",
                      }}
                  > <img src={one} style={{
                    position:"relative",
                    left:"35%",
                    width:"25%"
                  }}/>
                      <li
                          style={{
                              margin: "5%",
                              fontSize: 20,
                              textDecoration: "none",
                              listStyle: "none",
                              color: "black",
                              // position:"relative",
                              textAlign: "center",
                              // display: "flex",
                              // flexDirection: "column"
                          }}
                      >
                          <p style={{
                            fontSize: 30,
                            fontFamily:"eurostile",
                          }}
                             
                          >
                              Designer
                          </p>
                          <div>
                              <p>
                                  I value simple content structure, clean design patterns, and
                                  thoughtful interactions.
                              </p>
                              <p style={{ color: "blue" }}>Things I enjoy designing:</p>
                              <p>UX, UI, Web, Apps, Logos</p>
                              <p style={{ color: "blue" }}>Design Tools:</p>
                              <p>
                                  Affinity Designer<br /> Figma<br /> Font Awesome<br /> Pen & Paper<br /> Sketch<br />
                                  Webflow
                              </p>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </>
          {/* // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <div className="designer">
              <div
                  style={{
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                      border: "0.5px solid brown",
                      width: "30%",
                      lineHeight: "188.9%",
                      position: "absolute",
                      left: "35%",
                      top: "30%",
                      backgroundColor: "white",
                      borderRadius: "0px 0px",
                  }}
              >
                  <ul
                      className="designer_content"
                      style={{
                          padding: "30px",
                          fontSize: "18px",
                          color: "#333",
                      }}
                  >
                    <img src={two} style={{
                    position:"relative",
                    left:"37%",
                    width:"21%"
                  }}/>
                      <li
                          style={{
                              margin: "5%",
                              fontSize: 20,
                              textDecoration: "none",
                              listStyle: "none",
                              color: "black",
                              // position:"relative",
                              textAlign: "center",
                              // display: "flex",
                              // flexDirection: "column"
                          }}
                      >
                          <p
                              style={{
                                  fontSize: 30,
                                  fontFamily:"eurostile",
                              }}
                          >
                              Frontend Developer
                          </p>
                          <div>
                              <p>
                                  I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                              </p>
                              <p style={{ color: "blue" }}>TLanguages I speak:</p>
                              <p>HTML, Pug, Slim, CSS, Sass, Git</p>
                              <p style={{ color: "blue" }}>Dev Tools:</p>
                              <p>
                                  Atom<br />Bitbucket<br />Bootstrap<br />Bulma<br />Codekit<br />Github<br />Surge<br />Terminal<br />Vercel
                              </p>
                          </div>
                      </li>
                  </ul>
              </div>
          </div></>
          {/* // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <div className="designer">
              <div
                  style={{
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                      border: "1px solid brown",
                      width: "30%",
                      position: "absolute",
                      lineHeight: "220%",
                      left: "65%",
                      top: "30%",
                      backgroundColor: "white",
                      borderRadius: " 0px 20px 0px 0px",
                  }}
              >
                  <ul
                      className="designer_content"
                      style={{
                          padding: "20px",
                          fontSize: "18px",
                          color: "#333",
                      }}
                  >
                    <img src={three} style={{
                    position:"relative",
                    left:"35%",
                    width:"25%"
                  }}/>
                      <li
                          style={{
                              margin: "5%",
                              fontSize: 20,
                              textDecoration: "none",
                              listStyle: "none",
                              color: "black",
                              // position:"relative",
                              textAlign: "center",
                              // display: "flex",
                              // flexDirection: "column"
                          }}
                      >
                          <p
                              style={{
                                  fontSize: 30,
                                  fontFamily:"eurostile",
                              }}
                          >
                              Mentor
                          </p>
                          <div>
                              <p>
                                  I genuinely care about people, and love helping fellow designers work on their craft.                              </p>
                              <p style={{ color: "blue" }}>Experiences I draw from:</p>
                              <p>UX/UI, Product design, Freelancing</p>
                              <p style={{ color: "blue" }}>Mentor Stats:</p>
                              <p>
                                  7 years experience<br />26 short courses<br />65 bootcamps<br />200+ students<br />2,350+ mentor sessions<br />60+ group critiques<br />16,500+ comments </p>
                          </div>
                      </li>
                  </ul>
              </div>
          </div></>
          {/* // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <div style={{
              position: "absolute",
              bottom: "-255%",
              left: "40%",
          }}>
              <h2 className="interested">Interested in collaborating with me?</h2>
              <p style={{
                  position: "relative",
                  bottom: "-220%",
                  left: "-20%",
                  fontSize: "20px",
              }}>I’m always open to discussing product design work or partnership opportunities.</p>
              <div className="start">
                  <Link
                      style={{
                          border: "2px solid #6E07F3",
                          borderRadius: "30px",
                          width: "270px",
                          height: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          //   borderRadius
                          //   borderWidth: "5px",
                          //   backgroundColor:"blue",
                          padding: "20px",
                          position: "absolute",
                          top: "95.5%",
                          right: "55%",
                          listStyle: "none",
                          textDecoration: "none",
                          fontSize: 20,
                      }}
                  >
                      <MessageTwoTone style={{
                          position: "absolute",
                          left: "7%",
                          top: "30%",
                          width: "50px",
                      }} />  Start a conversation
                  </Link>
              </div>
          </div></>
 {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <div className="project" style={{
            border: "1px solid #141c3a",
            position:"absolute",
            bottom:"-290%",
            width: "100%",
            height:"22%",
            display:"flex",
            backgroundColor:"rgb(20,28,58)",
            color:"white",
            lineHeight: "220%",
            width: "80%",
            position: "absolute",
            left: "5%",
            borderRadius: " 20px",
          }}>
            <div style={{
                 padding: "35px",
                 fontSize: "18px",
                 display:"flex",
            }}>
               <h1>Start a project</h1>  
               <p style={{
                textAlign:"center",
                width:"50%",
                position:"relative",
                top:"0px",
               }}>Interested in working together? 
                We should queue up a time to chat.
                 I’ll buy the coffee.</p>  

                 <Link
                      style={{
                          border: "3px solid #58d098",
                          borderRadius: "30px",
                          width: "170px",
                          height: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "20px",
                          position: "absolute",
                          top: "40%",
                          right: "5%",
                          listStyle: "none",
                          textDecoration: "none",
                          fontSize: 20,
                      }}
                  > <p style={{
                    position:"absolute",
                    top:"-50%",
                    right:"20%",
                  }}><HandshakeSharp style={{
                    position:"absolute",
                    top:"20%",
                    left:"-40%",
                  }}/>Let's do this</p>
                  </Link>
            </div>
        </div></>    

);
}
export default Hashtag_home;
