import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import riccardo from "./riccardo.jpg";
import ArrowRightAltSharp from "@mui/icons-material/ArrowRightAltSharp";


function Riccardo() {
  const paperStyle = {
    height: 450,
    width: 800,
    margin: "220px auto",
    border: "1px solid #1c1d25",
    borderRadius: "3px",
  };

  return (
    <div>
      <Paper elevation={1} style={paperStyle}>
        <Box>
          <img
            src={riccardo}
            alt="Riccardo"
            style={{
              height: 450,
              width: 800,
              objectFit: "cover",
            }}/>
             <div style={{
                position: "absolute",
                top: "77%",
                left: "40%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "30px",
                fontWeight: "bold",
                // textAlign: "center",
                zIndex: "1",
             }}><h3 style={{
                fontSize:"50px",
                margin:"0",
                fontFamily:  "League Spartan,Helvetica,Arial,sans-serif",
             }}>Cerasa Redesign</h3>
             <h5 style={{
                 margin: "0 0 0 10px",
                 fontSize:"20px",
                 fontFamily: "LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif",
                 fontStyle:"italic",
            }}>leader in bathroom furniture since 1983</h5>
            <button style={{
                backgroundColor:"#rgb(232 70 39)",
                fontSize:"15px",
                // margin:"5px 5px",
                margin: "0px 0 0 10px",
                height:40,
                width:120,
                border:10,
                fontFamily:"League Spartan,Helvetica,Arial,sans-serif",
                color:"white",
                letterSpacing:"3px"
            }}>Case Study<ArrowRightAltSharp
            style={{
                position:"absolute",
                top:"75%",
                left:"29%",
                width:60,
                height:40,
                color:"white",
                margin:"-10"
            }}
        />
        </button>
             </div>
        </Box>
      </Paper>
    </div>
  );
}

export default Riccardo;
