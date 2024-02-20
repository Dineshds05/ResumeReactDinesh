import React from "react";
import Headernav from '../NavBase/Headernav';
import "../Components/project.css";

function Projects(){
    return(
        <div>
        <Headernav/>
        <div className="Text-style">
        <h2 class="pHead color-red my-3 text-center heading">Front-End React Projects</h2>
        {/* <ul>
            <li>Crud Application student management with routers - <a href="https://musical-moxie-42a69d.netlify.app/" target="_blank">Front-End Deployed URL</a></li>
            <li>Fetch API with simple webcode - <a href="https://loquacious-dusk-71e4c1.netlify.app" target="_blank">Front-End Deployed URL</a></li>
            <li> Context with Reducer using product based App - <a href="https://deluxe-trifle-e97603.netlify.app/" target="_blank">Front-End Deployed URL</a></li>
            <li>DOM Manipulation with Form -<a href="https://admirable-maamoul-43de80.netlify.app" target="_blank">Front-End Deployed URL</a></li>
        </ul> */}
        </div>
        <div class="projects Text-style my-3">

        <div class="card shadow text-center card-style">
        <div class="inner">
           <img src={"/projectimage/Capture.JPG"} class="card-img-top" alt="..."/> 
        </div>
            <hr></hr>
            <div class="card-body px-3 py-0">
            <h5 class="card-title">Crud Application</h5>
            <p class="card-text">Crud Application student management with routers
            <br/>front-end - React.js</p>
            <a href="https://musical-moxie-42a69d.netlify.app/" target="_blank" class="btn btn-rounded btn-outline-success  px-2 py-1 my-3">Open Live</a>
            </div>
            </div>

        <div class="card shadow text-center card-style" >
        <div class="inner">
           <img src={"/projectimage/Capture2.JPG"} class="card-img-top" alt="..."/> 
        </div>
        
        <hr></hr>
            <div class="card-body px-3 py-0">
            <h5 class="card-title">Web Code</h5>
            <p class="card-text">Fetch API with simple webcode with crud operation
            without using Framework
            </p>
            <a href="https://loquacious-dusk-71e4c1.netlify.app" target="_blank" class="btn btn-rounded btn-outline-success  px-2 py-1 my-3">Open Live</a>
            </div>
        </div>
        
        <div class="card shadow text-center card-style">
        <div class="inner">
            <img src={"/projectimage/Capture3.JPG"} class="card-img-top" alt="..."/> 
        </div>
        
        <hr></hr>
            <div class="card-body px-3 py-0">
            <h5 class="card-title">Context with Reducer</h5>
            <p class="card-text">Context with Reducer using product based App</p>
            <a href="https://deluxe-trifle-e97603.netlify.app/" target="_blank" class="btn btn-rounded btn-outline-success  px-2 py-1 my-3">Open Live</a>
            </div>
        </div>

        <div class="card shadow text-center card-style">
        <div class="inner">
         <img src={"/projectimage/Capture4.JPG"} class="card-img-top" alt="..."/>
        </div>
        
        <hr></hr>
            <div class="card-body px-3 py-0">
            <h5 class="card-title">DOM Manipulation</h5>
            <p class="card-text">DOM Manipulation with Form
            without using Framework</p>
            <a href="https://admirable-maamoul-43de80.netlify.app" target="_blank" class="btn btn-outline-success btn-rounded px-2 py-1 my-3">Open Live</a>
            </div>
        </div>

        </div> 
            </div>
    );
}
export default Projects;