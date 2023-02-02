import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import { Avatar, Grid,Paper } from '@mui/material';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Switch } from 'react-switch-input';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import KeyIcon from '@mui/icons-material/Key';
import KeyOffIcon from '@mui/icons-material/KeyOff';
import HomeIcon from '@mui/icons-material/Home';
import CakeIcon from '@mui/icons-material/Cake';
import {Animated} from "react-animated-css";
import { makeStyles } from '@mui/material';


function Animation() {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone: "",
      dob: ""
    });

    const [currentStep, setCurrentStep] = useState(1);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleNextStep = (e) => {
      setCurrentStep(currentStep + 1);
    };
  
 

    // const handlePreviousStep = () => {
    //   setCurrentStep(currentStep - 1);
    // };

  const paperStyle = {
    padding: "5px 20px", 
    height:50,
    width: 200,
    margin: "220px auto",
    border: "1px solid black",
    borderRadius: "30px 30px"
  }



      
  return (
    
    <>
    <Paper elevation={10} style={paperStyle}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end'
        }}>

        <>
          {currentStep === 1 && (
            <>
              <FaceIcon
                sx={{
                  color: '#ed30e7',
                  mr: 2,
                  my: 0.5,
                  height: "35px",
                  width: "50px"
                }} />
              <TextField
                InputProps={{ disableUnderline: true }}
                placeholder='Name'
                variant="standard"
                value={formData.name}
                name='name'
                onChange={handleChange}
                style={{ color: 'black' }}
                type='text'
              ></TextField>
              <Button
                variant="text"
                onClick={handleNextStep}
                endIcon={<KeyboardDoubleArrowRightIcon />} />
            </>
          )}

        </>
        <>
          {currentStep === 2 && (
            <>
              <MarkEmailReadIcon
                sx={{
                  color: '#297fd3',
                  mr: 2,
                  my: 0.5,
                  height: "35px",
                  width: "50px"
                }} />
              <TextField
                InputProps={{ disableUnderline: true }}
                placeholder="Email"
                variant="standard"
                value={formData.email}
                name='email'
                onChange={handleChange}
                type='email' />
              <Button
                variant="text"
                onClick={handleNextStep}
                endIcon={<KeyboardDoubleArrowRightIcon />} />
            </>
          )}
        </>
        <>
          {currentStep === 3 && (
            <>
              <KeyIcon
                sx={{
                  color: '#0d749d',
                  mr: 2,
                  my: 0.5,
                  height: "35px",
                  width: "50px"
                }} />
              <TextField
                InputProps={{ disableUnderline: true }}
                placeholder="Password"
                variant="standard"
                value={formData.password}
                name='password'
                onChange={handleChange}
                type='password' />
              <Button
                variant="text"
                onClick={handleNextStep}
                endIcon={<KeyboardDoubleArrowRightIcon />} />
            </>
          )}
        </>
        <>
          {currentStep === 4 && (
            <>
              <KeyOffIcon
                sx={{
                  color: '#0d749d',
                  mr: 2,
                  my: 0.5,
                  height: "35px",
                  width: "50px"
                }} />
              <TextField
                InputProps={{ disableUnderline: true }}
                placeholder="Confirm Password"
                variant="standard"
                value={formData.confirm_password}
                name='confirm_password'
                onChange={handleChange}
                type='password' />
              <Button
                variant="text"
                onClick={handleNextStep}
                endIcon={<KeyboardDoubleArrowRightIcon />} />
            </>
          )}
        </>
        <>
          {currentStep === 5 && (
            <>
              <PhoneInTalkIcon
                sx={{
                  color: '#31bd4b',
                  mr: 2,
                  my: 0.5,
                  height: "35px",
                  width: "50px"
                }} />
              <TextField
                InputProps={{ disableUnderline: true }}
                placeholder="Phone Number"
                variant="standard"
                value={formData.phone}
                name='phone'
                onChange={handleChange}
                type='number' />
              <Button
                variant="text"
                onClick={handleNextStep}
                endIcon={<KeyboardDoubleArrowRightIcon />} />
            </>
          )}
        </>
        <>
          {currentStep === 6 && (
            <>
              <CakeIcon
                sx={{
                  color: '#d32424',
                  mr: 2,
                  my: 0.5,
                  height: "35px",
                  width: "50px"
                }} />
              <TextField
                InputProps={{ disableUnderline: true }}
                placeholder="Date of birth"
                variant="standard"
                value={formData.dob}
                name='dob'
                onChange={handleChange}
                type='date' />
              <Button
                variant="text"
                onClick={handleNextStep}
                endIcon={<KeyboardDoubleArrowRightIcon />} />
            </>
          )}
        </>
        {currentStep === 7 && (


          <div>
            Success!
          </div>
        )}

       
      </Box>
    </Paper>
    
    
  </>  
  )
}


export default Animation;