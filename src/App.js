import './App.css';
import React from 'react';
import Home from "./Components/Home";
import { Route, Routes } from 'react-router-dom';
import Education from "./Components/Education";
import Contact from './Components/Contact';
import Skills from './Components/skills';
import Biodata from './Components/Biodata';
import Projects from './Components/projects';
function App() {
  return (
    <div className="App">
      
    <Routes>
    <Route exact path='/' element = {<Home/>}/>
    <Route exact path='/Home' element = {<Home/>}/>
    <Route exact path='/Education' element = {<Education/>}/>
    <Route exact path='/skills' element = {<Skills/>}/>
    <Route exact path='/projects' element = {<Projects/>}/>
    <Route exact path='/biodata' element = {<Biodata/>}/>
    <Route exact path='/contactdetails' element = {<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
