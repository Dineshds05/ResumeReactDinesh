import React from "react";
import Headernav from '../NavBase/Headernav';
import "../Components/education.css";
import image1 from "../images/pexels-photo-452728.jpeg"
import image2 from "../images/pexels-photo-593655.jpeg"
import image3 from "../images/pexels-photo-709552.jpeg"
import image4 from "../images/pexels-photo-906150.webp"
import image5 from "../images/pexels-photo-531774.webp"


function Education(){
    
    return(
        <div class='mb-3'>
        <Headernav/>
        <div className="Text-style">
        <h2 class="pHead color-red my-3 text-center heading">Education Qualifications</h2>
         {/*Carousel*/}
         <div class="container-fluid mb-2 bg-transparent shadow">
        <div className="slide"><div className="head-cert"><h3 class="text-center py-2 mt-2 fw-semibold mb-2 d-block head-cert md-offset-3 md-w-50">
            Education Certificates
          </h3></div>
          <div class="carousel slide carousel-slide mb-3" id="slider1" data-bs-ride="carousel">
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
         {/* Carousel end */}

         <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Full Stack Developer Course - MERN
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <h2 className="head"><u>Guvigeek Network Pvt Ltd</u></h2>
        <ul>
            <li>Guvigeek Network India Pvt Ltd</li>
            <li>IITM-Chennai,</li>
            <li>Duration : JAN 2023-DEC 2023.</li>
        </ul></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       Master of Computer Application
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <h2 className="head"><u>Post Graduate</u></h2>
            <h3>Master of Computer Applications</h3>
        <ul>
            <li>Adhiparasakthi Engineering College,</li>
            <li>Melmaruvathur,</li>
            <li>Percentage : 71%,</li>
            <li>Year of Passing : 2019.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      B.sc - Computer Science
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><h2 className="head"><u>Under Graduate</u></h2>
            <h3>B.sc - Computer Science</h3>
        <ul>
            <li>Sri Malolan College of Arts and Science,</li>
            <li>Madurantakam,</li>
            <li>Percentage : 74%,</li>
            <li>Year of Passing : 2017.</li>
        </ul></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      HSC
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><h2 className="head">HSC</h2>
        <ul>
            <li>Government Higher Secondary School,</li>
            <li>Karunguzhi,</li>
            <li>Percentage : 58%,</li>
            <li>Year of Passing : 2012.</li>
        </ul></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      SSLC
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">   <h2 className="head"><u>SSLC</u></h2>
        <ul>
            <li>Hindu Higher Secondary School,</li>
            <li>Madurantakam,</li>
            <li>Percentage : 52%,</li>
            <li>Year of Passing : 2010.</li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        
    );
}
export default Education;