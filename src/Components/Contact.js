import React from "react";
import Headernav from '../NavBase/Headernav';
import { Box, Grid, Paper } from "@mui/material";

function Contact(){
    return(
        <div>
          <Headernav/><div className="Text-style">
         <Box 
      sx={{
        display: 'flex',
        alignItems:'center',
        textAlign:'center',
        '& > :not(style)': {
          ml:50,
          height:150,
          width:400,
        },  
      }}
    >
    <Paper elevation={6}>
        <h2>Email : dineshbsc884@gmail.com</h2>
        <h2>Phone No : 8838464921</h2></Paper>
      </Box></div>
        </div>
    );
}
export default Contact;