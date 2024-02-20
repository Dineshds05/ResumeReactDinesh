import React from "react";
import Headernav from "../NavBase/Headernav";
import { TypeAnimation } from 'react-type-animation';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../Components/home.css";
import homeimg from"../images/winning resume.jpg.jpg"


function Home(){
    return(
        <div>
        <Headernav
        Title={"Full Stack Developer"}
        children={
          
          <div className="cv_buttons">
            <h4>Hi i am a {<ExampleComponent/>}</h4>
        </div>
           }
        Description = {"This is my Resume"}
        />
        <div class="text-center">
           <a class="btn btn-success mx-2 my-3" href="" >
              Hire Me
            </a>
            <a  href={"/resume/Resume.pdf"} class="btn btn-success mx-2 my-3" download={"Resume.pdf"}>
              Download CV
            </a>
          </div>
          {/* Linked and git*/}
          <div class="items mb-2">
                <div className="inline">
        <h2><span><a href="https://github.com/Dineshds05" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="git-name" className="git"/></a></span><span className="gap"><a href="https://www.linkedin.com/in/dinesh-kumar-r-68bbb7254/?trk=public-profile-join-page" target="_blank"><img src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png" alt="linked-name" className="git"/></a></span></h2>
        </div>
       </div>
       <div class="home-img">
        <img src={homeimg} alt="..."></img>
       </div>
        </div>
    );
}
export default Home;



const ExampleComponent = () => {
    return (
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Software Developer',
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          'Mern Stack Developer',
          2000,
          'React Developer',
          2000,
          'Node.js Developer',
          2000
        ]}
        // wrapper="span"
        speed={10}
        style={{ fontSize: '20px',display: 'inline',color:'crimson' }}
        repeat={Infinity}
      />
    );


  };


