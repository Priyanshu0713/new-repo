import React from "react";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FaceIcon from "@mui/icons-material/Face";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import KeyIcon from "@mui/icons-material/Key";
import KeyOffIcon from "@mui/icons-material/KeyOff";
import CakeIcon from "@mui/icons-material/Cake";
import Switch from "@mui/material";
import { makeStyles } from "@mui/styles";
import { fontSize } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/system";
import { Translate } from "@mui/icons-material";




const useStyles = makeStyles({
  
  btn1: {
      height: 50,
      width: 200,
      // backgroundColor: "black",
      // color: 'pink',
      // transform: 'TranslateX(-40%) ',
      // transition:'all 900ms ease-in',
    '&:hover':{
      backgroundColor: "pink",
      color: "black",
      width:'1s',
        //  transform: 'rotate(180deg)',
      // transform:'rotatex(360deg)',
    //  transform: 'TranslateX(-40%) ',
    //  transition:'all 900ms ease-in',

  }
    
  }
})

function Animation() {
const classes = useStyles();

  // var style = {
  //   width: "100px",
  //   height: "100px",
  //   backgroundColor: "red",
  //   position: "relative",
  //   animationName: "example",
  //   animationDuration: "4s",
  // };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
    dob: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  
  const handleNextStep = (e) => {
    setCurrentStep(currentStep + 1);
    
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const paperStyle = {
    padding: "5px 20px",
    height: 50,
    width: 200,
    margin: "220px auto",
    border: "1px solid black",
    borderRadius: "30px 30px",
    // backgroundColor: "#c32887",
    // color: "black",
  };

  return (
    <>
      <Paper elevation={10}  style={paperStyle}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <>
            {currentStep === 1 && (
              <Button
              className={`${classes.btn1} ${true && classes.btn11} test`}
                variant="text"
                onClick={handleNextStep}
              >
                SignUp
              </Button>
            )}
          </>
          <>
            {currentStep === 2 && (
              <>
                <FaceIcon
                  sx={{
                    color: "#ed30e7",
                    mr: 2,
                    my: 0.5,
                    height: "35px",
                    width: "50px",
                  }}
                />
                <TextField
                  InputProps={{ disableUnderline: true }}
                  placeholder="Name"
                  variant="standard"
                  value={formData.name}
                  name="name"
                  onChange={handleChange}
                  style={{ color: "black" }}
                  type="text"
                ></TextField>
                <Button
                  variant="text"
                  onClick={handleNextStep}
                  endIcon={<KeyboardDoubleArrowRightIcon />}
                />
              </>
            )}
          </>
          <>
            {currentStep === 3 && (
              <>
                <MarkEmailReadIcon
                  sx={{
                    color: "#297fd3",
                    mr: 2,
                    my: 0.5,
                    height: "35px",
                    width: "50px",
                  }}
                />
                <TextField
                  InputProps={{ disableUnderline: true }}
                  placeholder="Email"
                  variant="standard"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                  type="email"
                />
                <Button
                  variant="text"
                  onClick={handleNextStep}
                  endIcon={<KeyboardDoubleArrowRightIcon />}
                />
              </>
            )}
          </>
          <>
            {currentStep === 4 && (
              <>
                <KeyIcon
                  sx={{
                    color: "#0d749d",
                    mr: 2,
                    my: 0.5,
                    height: "35px",
                    width: "50px",
                  }}
                />
                <TextField
                  InputProps={{ disableUnderline: true }}
                  placeholder="Password"
                  variant="standard"
                  value={formData.password}
                  name="password"
                  onChange={handleChange}
                  type="password"
                />
                <Button
                  variant="text"
                  onClick={handleNextStep}
                  endIcon={<KeyboardDoubleArrowRightIcon />}
                />
              </>
            )}
          </>
          <>
            {currentStep === 5 && (
              <>
                <KeyOffIcon
                  sx={{
                    color: "#0d749d",
                    mr: 2,
                    my: 0.5,
                    height: "35px",
                    width: "50px",
                  }}
                />
                <TextField
                  InputProps={{ disableUnderline: true }}
                  placeholder="Confirm Password"
                  variant="standard"
                  value={formData.confirm_password}
                  name="confirm_password"
                  onChange={handleChange}
                  type="password"
                />
                <Button
                  variant="text"
                  onClick={handleNextStep}
                  endIcon={<KeyboardDoubleArrowRightIcon />}
                />
              </>
            )}
          </>
          <>
            {currentStep === 6 && (
              <>
                <PhoneInTalkIcon
                  sx={{
                    color: "#31bd4b",
                    mr: 2,
                    my: 0.5,
                    height: "35px",
                    width: "50px",
                  }}
                />
                <TextField
                  InputProps={{ disableUnderline: true }}
                  placeholder="Phone Number"
                  variant="standard"
                  value={formData.phone}
                  name="phone"
                  onChange={handleChange}
                  type="number"
                />
                <Button
                  variant="text"
                  onClick={handleNextStep}
                  endIcon={<KeyboardDoubleArrowRightIcon />}
                />
              </>
            )}
          </>
          <>
            {currentStep === 7 && (
              <>
                <CakeIcon
                  sx={{
                    color: "#d32424",
                    mr: 2,
                    my: 0.5,
                    height: "35px",
                    width: "50px",
                  }}
                />
                <TextField
                  InputProps={{ disableUnderline: true }}
                  placeholder="Date of birth"
                  variant="standard"
                  value={formData.dob}
                  name="dob"
                  onChange={handleChange}
                  type="date"
                />
                <Button
                  variant="text"
                  onClick={handleNextStep}
                  endIcon={<KeyboardDoubleArrowRightIcon />}
                />
              </>
            )}
          </>
          {currentStep === 8 && (
            <>
              <div style={{ color: "red" }}>Success!</div>
            </>
          )}
        </Box>
      </Paper>
    </>
  );
}

export default Animation;
