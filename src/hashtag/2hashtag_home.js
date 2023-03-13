import React from "react";
import { Link } from "react-router-dom";
import hashtag from "./hashtag.JPG";
import mf_avatar from "./mf_avatar.jpg";
import one from "./one.JPG";
import two from "./two.JPG";
import three from "./three.JPG";

import computer from "./computer.JPG";
import MessageTwoTone from "@mui/icons-material/MessageTwoTone";
import HandshakeSharp from "@mui/icons-material/HandshakeSharp";

function Hashtag_home2() {
  return (
    <><><div className="wholepage">
      <nav className="hash_navbar">
        <div className="hashtag_navbar">
          <img
            className="img404"
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
      </nav>
      {/* >>>>>>>>>>>>>>>>>>>>>>>>>heading>>>>>>>>>>>>>>>>>>..  */}
      <div className="hashtag_heading">
        <h3 className="h3"
          style={{
            fontSize: "2.5rem",
            position: "absolute",
            marginLeft: "22%",
            top: "15%",
          }}
        >
          Designer, Frontend Developer & Mentor
        </h3>

        <h className="h"
          style={{
            fontSize: "1.2rem",
            position: "absolute",
            top: "32%",
            marginLeft: "28%",
          }}
        >
          I design and code beautifully simple things, and I love what I do.
        </h>
      </div>

      <div className="imgs">
        <img className="img1"
          src={mf_avatar}
          style={{
            width: "25%",
            height: "40%",
            position: "absolute",
            top: "40%",
            left: "35%",
            alignItems: "center",
          }} />
        <img className="img2"
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
            position: "relative",
            left: "35%",
            width: "25%"
          }} />
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
                fontFamily: "eurostile",
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
              position: "relative",
              left: "37%",
              width: "21%"
            }} />
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
                  fontFamily: "eurostile",
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
      </div>

{/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
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
              position: "relative",
              left: "35%",
              width: "25%"
            }} />
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
                  fontFamily: "eurostile",
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
      </div>
{/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      
<div className="interest_hash" style={{
              position: "absolute",
              bottom: "-270%",
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
  </div>
  </div>
      </>
      </>
    

  );
}
export default Hashtag_home2;
