import React from 'react'
import { useState} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { blue, green, lightBlue, lightGreen, orange } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { Button, TextField, Paper, Typography, Stack, IconButton, styled, CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import { motion } from "framer-motion";
import { Container } from '@mui/system';
import { makeStyles } from '@material-ui/core';
// import lightGreen from '@mui/material/colors/lightGreen';
import { useEffect } from 'react';
// const {makeStyles} =MaterialUI;
// const Person ={
//     name : "Ri",
//     age: 1,
//     family:{
//         Mother:"qeteue",
//         father
//     }
// }
const useStyles =makeStyles({
    mybutton: {
        // width:"100vw",
        // height:"100vh",
        width:'10px',
        color:'#4DD0E1',
        transition: 'all 1s ease-in-out',
        '&:hover':{
            color:'#66BB6A',
            width:'2s',
            transform: 'rotate(180deg)',
        }
    },
    Container:{
            backgroundColor:'red',
            // '& .container1': {       --------- way to define 'parent to child css'
                '& .test':{
                }
            // }
    },
    container1:{
    },
    mybutton2:{
        color:'white',
        '&:hover':{
            color:'#66BB6A',
            transition:'all 1s ease-in',
            transform:'rotate(5deg)',
        }
    },
    mybox:{
        '&:hover':{
           transform:' rotateY(180deg)',
        }
    },
    // <mybutton:hover></mybutton:hover>
  });
  const CustomizedButton = styled(Button)`
  color: #F0F2F1
  backgroun-color: #F0F2F1
  :hover {
    color: #32A87D
    background-color: #6378E6
    transition: all 1s ease-in-out
     transform: rotate(45deg)
  }
  `
  ;
function AnimationStyle () {
    const classes = useStyles();
    const theme =createTheme({
        palette:{
            primary:{
                main: '#66BB6A'
            }
        },
        spacing: 3,
        shape:{
            borderRadius:25
        }
        // breakpoints:{
        //     width: width(500)
        // }
    });
    const theme1 =createTheme({
        palette:{
            primary:{
                main:'#4DD0E1'
            }
        }
    });
    const theme2 =createTheme({
        palette:{
            secondary:{
                main:'#FFD600'
            }
        }
    });
    const theme3 =createTheme({
        palette:{
            error:{
                main:'#B71C1C'
            }
        }
    });
    const theme4 =createTheme({
        palette:{
            warning:{
                main:'#76FF03'
            }
        }
    });
    const theme5 =createTheme({
        background:{
            default:'#C8E6C9'
        }
    });
const [formData, setFormData]=useState({
    Name:"",
    email:"",
    password:""
});
const handleChange = (e) => {
    const name=e.target.name;
        const value=e.target.value;
        console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };
const[currentStep, setCurrentStep]=useState(1);
const handleNextStep = (e) => {
    setCurrentStep(currentStep + 1);
  };
const[color,setColor]=useState(lightBlue);
 const click =color
setColor(color)
 }
 useEffect(()=>{
document.body.style.backgroundColor = color
}, [color])
  const paperStyle1 = {
    // padding: "5px 20px",
    height:58,
    width: 450,
    margin: "220px auto",
    border: "1px solid white",
    borderRadius: "10px 10px",
    boxShadow: 12
  }
//   const inptLabelStyle= {
//     color:"blue"
//   }
    return (
        <Container
        className={classes.Container}>
        <Paper style={paperStyle1}>
        <Box component="section"
        sx={{
          display: 'flex',
          justifyContent: 'center',
         }}
         className={classes.mybox}>
        {/* <div   className="container1"> */}
            <>
            {currentStep ===1 &&(
                <>
                <TextField
                label='Choose your color'
                // style={{color:"blue"}}
                color='primary'
                onClick={handleNextStep}
                // InputLabelProps={{inptLabelStyle}}
                >
                </TextField>
                {/* /* <Stack>
                    <Button
                    label='Choose your color'
                  variant='contained'
                    color='warning'
                    size='large'
                onClick={handleNextStep}
                max-width=""
                    />
                </Stack>   */}
                <Stack  display='flex'spacing={1} direction='row'>
                    <ThemeProvider theme={theme1}>
                        <Button
                        variant='contained'
                        // style={{ backgroundColor:"lightblue"}}
                        color='primary'
                        className={`${classes.mybutton} ${true && classes.container1} test`} // way to define multiple class name inside including condition
                        // className={classes.container1} -----way to implement calssname
                        size='large'
                        onClick={handleNextStep}
                        // onClick ={ () => click("Lightblue")}
                        />
                    </ThemeProvider>
                <ThemeProvider theme={theme2}>
                    <Button
                    variant='contained'
                    // style={{ backgroundColor:"yellow"}}
                    color='secondary'
                    className={classes.mybutton}
                    onClick={handleNextStep}/>
                </ThemeProvider>
                <ThemeProvider theme={theme3}>
                    <Button
                    variant='contained'
                    // style={{ backgroundColor:"darkpink"}}
                    color='error'
                    className={classes.mybutton}
                    onClick={handleNextStep}/>
                </ThemeProvider>
                <ThemeProvider theme={theme4}>
                    <Button
                    variant='contained'
                    // style={{ backgroundColor:"green"}}
                    color='warning'
                    className={classes.mybutton}
                    onClick={handleNextStep}/>
                </ThemeProvider>
                </Stack>
                </>
            )
            }
            </>
            {/* <div className="contpart2">
                <motion.div whileHover={{rotate:180, scale:1}}className="cont1"></motion.div>
                <motion.div whileHover={{rotate:180, scale:1.2}} className="cont2"></motion.div>
                <motion.div whileHover={{rotate:180, scale:1.2}} className="cont3"></motion.div>
                <motion.div whileHover={{rotate:180, scale:1.2}} className="cont4"></motion.div>
                <motion.div whileHover={{rotate:180, scale:1.2}} className="cont5"></motion.div>
            </div>
           </div>  */}
         <>
         {currentStep ===2 &&(
            <>
                <PersonIcon
                sx={{
                    color:'blue',
                    mr:2,
                    my:2,
                    p:0,
                    height:"25px",
                    width:"60px",
                }}/>
                <TextField
                placeholder='Whats your full name'
                variant="filled"
                id="fullWidth"
                value={formData.Name}
                name='Name'
                onChange={handleChange}
                style={{color:'blue'}}
                InputProps={{height:"80", }}
                />
                {/* <Button
                variant="contained"
                style={{ backgroundColor:"lightblue"}}/> */}
                <ThemeProvider theme={theme}>
                <CustomizedButton
                onClick={handleNextStep}
                endIcon={<PersonIcon />}
                 color='primary'
                size='medium'
                className={classes.mybutton2}
                variant='contained'>Continue
                   </CustomizedButton>
                   </ThemeProvider>
            </>
        )}
        </>
         <>
            {currentStep===3 && (
                <>
                <MailIcon
                sx={{
                    color:'blue',
                    mr:2,
                    my:2,
                    p:0,
                    height:"25px",
                    width:"60px",
                }}
                />
                <TextField
                placeholder='Tell me your email address '
                variant="filled"
                id="fullWidth"
                value={formData.email}
                name='email'
                onChange={handleChange}
                type="email"
                />
                <ThemeProvider theme={theme}>
                <Button
                variant="contained"
                // style={{ backgroundColor:"lightblue"}}
                color='secondary'
                onClick={handleNextStep}
                endIcon={<MailIcon/>}
                >Continue</Button>
                </ThemeProvider>
                </>
            )}
        </>
         <>
         {currentStep===4 && (
                <>
                <LockIcon
                sx={{
                    color:'blue',
                    mr:2,
                    my:2,
                    p:0,
                }}
                />
                <TextField
                placeholder='Enter your Password'
                variant="filled"
                id="fullWidth"
                type="password"
                value={formData.password}
                onChange={handleChange}
                name='password'
                />
                <ThemeProvider theme={theme}>
                <Button
                variant="contained"
                // style={{ backgroundColor:"blue"}}
                color='primary'
                onClick={handleNextStep}
                endIcon={<LockIcon />}
                >Continue</Button>
                </ThemeProvider>
                </>
            )}
        </>
        <>
         {currentStep===5 &&(
            <>
        <ThemeProvider theme={theme5}>
        <Box style={{color: lightGreen[200]}}>
            <Typography variant="h3"style={{color:"green", backgroundColor:"yellow"}}>Completed</Typography>
            </Box>
            </ThemeProvider>
            </>
         )}
        </>
        </Box>
        </Paper>
        </Container>
    )
        
export default AnimationStyle;