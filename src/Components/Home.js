import React from "react";
import Headernav from "../NavBase/Headernav";
import {Element} from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import image1 from "../images/pexels-photo-452728.jpeg"
import image2 from "../images/pexels-photo-593655.jpeg"
import image3 from "../images/pexels-photo-709552.jpeg"
import image4 from "../images/pexels-photo-906150.webp"
import image5 from "../images/pexels-photo-531774.webp"



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

          {/*Carousel*/}
        <div class="container-fluid mb-2 bg-transparent shadow">
        <div className="slide"><div className="head-cert"><h3 class="text-center py-2 mt-2 fw-semibold mb-2 d-block head-cert md-offset-3 md-w-50">
            Education Certificates
          </h3></div>
          <div class="carousel slide carousel-slide mx-md-1 mb-3" id="slider1" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-slide-to="0" data-bs-target="#slider1" class="active">
                </button>
                <button type="button" data-bs-slide-to="1" data-bs-target="#slider1">
                </button>
                <button type="button" data-bs-slide-to="2" data-bs-target="#slider1">
                </button>
                <button type="button" data-bs-slide-to="3" data-bs-target="#slider1">
                </button>
                <button type="button" data-bs-slide-to="4" data-bs-target="#slider1">
                </button>
              </div>
              <div class="carousel-inner shadow">
                <div class="carousel-item active shadow" data-bs-interval="2000">
                  <img src={image1} alt="..." class="d-block w-100"/>
                   <div class="carousel-caption d-none d-md-block">
                      <h5>Sample Slide 1</h5>
                       <p>Dinesh certificates</p>
                   </div>
                </div>
                
                <div class="carousel-item shadow" data-bs-interval="2000">
                  <img src={image2} alt="..." class="d-block w-100"/>
                   <div class="carousel-caption d-none d-md-block">
                      <h5>Sample Slide 1</h5>
                       <p>Dinesh certificates</p>
                   </div>
                </div>

                <div class="carousel-item shadow" data-bs-interval="2000">
                  <img src={image3} alt="..." class="d-block w-100"/>
                   <div class="carousel-caption d-none d-md-block">
                      <h5>Sample Slide 1</h5>
                       <p>Dinesh certificates</p>
                   </div>
                </div>

                <div class="carousel-item shadow" data-bs-interval="2000">
                  <img src={image4} alt="..." class="d-block w-100"/>
                   <div class="carousel-caption d-none d-md-block">
                      <h5>Sample Slide 1</h5>
                       <p>Dinesh certificates</p>
                   </div>
                </div> 

                <div class="carousel-item shadow" data-bs-interval="2000">
                  <img src={image5} alt="..." class="d-block w-100"/>
                   <div class="carousel-caption d-none d-md-block">
                      <h5>Sample Slide 1</h5>
                       <p>Dinesh certificates</p>
                   </div>
                </div> 

              </div>
              <button type="button" class="carousel-control-prev" data-bs-target="#slider1" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </button>

              <button type="button" class="carousel-control-next" data-bs-target="#slider1" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
              </button>

          </div>
        </div></div>
      
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


