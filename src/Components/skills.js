import React from "react";
import Headernav from '../NavBase/Headernav';
function Skills(){
    return(
        <div>
        <Headernav/>
        <div className="Text-style">
        <h2 className="pHead"><u>Skills</u></h2>
        <ul>
            <li>Languages: JavaScript (ES6+), HTML5, CSS3,</li>
            <li>Front-End: React.js, Redux, HTML, CSS, Bootstrap,</li>
            <li>Back-End: Node.js, Express,</li>
            <li>Database: MongoDB, SQL,</li>
            <li>Version Control: Git, GitHub,</li>
            <li>Tools: npm, Visual studio,</li>
            <li>Other: RESTful APIs, JSON,</li>
        </ul>
      </div>
        </div>
    );
}
export default Skills;