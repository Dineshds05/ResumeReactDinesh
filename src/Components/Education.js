import React from "react";
import Headernav from '../NavBase/Headernav';
import { Box, Paper } from "@mui/material";

function Education(){
    
    return(
        <div>
        <Headernav/>
      
        <div className="Text-style">
        <Box
      sx={{
        display: 'flex',
        flexWrap:'wrap',
        gap:"15px",
        '& > :not(style)': {
          ml: 10,
          width: 400,
          height: 250,
        },
      }}
    >
        <Paper elevation={5}>
        <h2><u>Guvigeek Network Pvt Ltd</u></h2>
        <ul>
            <li>Full Stack Developer,</li>
            <li>IITM-Chennai,</li>
            <li>Duration : JAN 2023-DEC 2023.</li>
        </ul></Paper>
        <Paper elevation={5}>
        <h2><u>Post Graduate</u></h2>
            <h3>Master of Computer Applications</h3>
        <ul>
            <li>Adhiparasakthi Engineering College,</li>
            <li>Melmaruvathur,</li>
            <li>Percentage : 71%,</li>
            <li>Year of Passing : 2019.</li>
        </ul></Paper>
        <Paper elevation={5}>
        <h2><u>Under Graduate</u></h2>
            <h3>B.sc - Computer Science</h3>
        <ul>
            <li>Sri Malolan College of Arts and Science,</li>
            <li>Madurantakam,</li>
            <li>Percentage : 74%,</li>
            <li>Year of Passing : 2017.</li>
        </ul></Paper>
        <Paper elevation={5}>
        <h2><u>Higher Secondary</u></h2>
        <ul>
            <li>Government Higher Secondary School,</li>
            <li>Karunguzhi,</li>
            <li>Percentage : 58%,</li>
            <li>Year of Passing : 2012.</li>
        </ul></Paper>
        <Paper elevation={5}>
        <h2><u>SSLC</u></h2>
        <ul>
            <li>Hindu Higher Secondary School,</li>
            <li>Madurantakam,</li>
            <li>Percentage : 52%,</li>
            <li>Year of Passing : 2010.</li>
        </ul></Paper></Box>
        </div>
        </div>
    );
}
export default Education;