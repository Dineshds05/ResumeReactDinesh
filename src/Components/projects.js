import React from "react";
import Headernav from '../NavBase/Headernav';
function Projects(){
    return(
        <div>
        <Headernav/>
        <div className="Text-style">
        <h2 className="pHead"><u>Front-End React Projects</u></h2>
        <ul>
            <li>Crud Application student management with routers - <a href="https://musical-moxie-42a69d.netlify.app/" target="_blank">Front-End Deployed URL</a></li>
            <li>Fetch API with simple webcode - <a href="https://loquacious-dusk-71e4c1.netlify.app" target="_blank">Front-End Deployed URL</a></li>
            <li> Context with Reducer using product based App - <a href="https://deluxe-trifle-e97603.netlify.app/" target="_blank">Front-End Deployed URL</a></li>
            <li>DOM Manipulation with Form -<a href="https://admirable-maamoul-43de80.netlify.app" target="_blank">Front-End Deployed URL</a></li>
        </ul>
        </div>
        </div>
    );
}
export default Projects;