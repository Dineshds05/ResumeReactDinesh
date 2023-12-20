import React from "react";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Headernav({Title,Description,children}) {
        const navigate = useNavigate()
        return (
            <div className="container">
            <header>
           
            
          <AppBar position="static">
            <Toolbar>
        <Typography variant="h5"
            component="div"
            sx={{flexGrow: 0.5, display: { xs: 'none', sm: 'block' } }}>
         R.DINESH KUMAR
        </Typography>
        
        <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={()=>navigate("/Home")}>
        <Typography variant="h8" color="white" component="div" >
        Home
        </Typography></Button>
        <Button variant="contained" onClick={()=>navigate("/Education")}>
        <Typography variant="h8" color="white" component="div" >
        Educations
        </Typography></Button>
        <Button variant="contained" onClick={()=>navigate("/skills")}>
        <Typography variant="h8" color="white" component="div" >
        Skills
        </Typography></Button>
        <Button variant="contained" onClick={()=>navigate("/projects")}>
        <Typography variant="h8" color="white" component="div" >
        Projects
        </Typography></Button>
        <Button variant="contained" onClick={()=>navigate("/biodata")}>
        <Typography variant="h8" color="white" component="div" >
        Bio-Data
        </Typography></Button>
        <Button variant="contained" onClick={()=>navigate("/contactdetails")}>
        <Typography variant="h8" color="white" component="div" >
        Contact Details
        </Typography></Button>
        </Stack>
      </Toolbar>
    </AppBar>
    </header>
    <div className="main-container">
            <main className="items">
                <h1>{Title}</h1>
                <h3>{Description}</h3>
                <div className="contents">
                    {children}
                </div>
            </main>
          </div>
          </div>
    );
  }
  
  export default Headernav;