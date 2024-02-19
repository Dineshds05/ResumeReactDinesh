import React, { useEffect } from "react";
import Headernav from '../NavBase/Headernav';
import "../Components/Biodata.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function Biodata(){
    useEffect(()=>{
        const scriptURL = "https://script.google.com/macros/s/AKfycbyL8D3W9EEuFERtaqnAa4pM8xJNTzpwSWW0E7vy-UnJaWTTTiWwjidl9ZPwLgB4BYkMAA/exec"
        const form = document.forms['ContactUs']
      
        form.addEventListener('submit', e => {
            let data;
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          
            .then(response =>{
                form.reset()
                const formdata=document.getElementById("Alert")
                formdata.innerHTML=`<p class="alert alert-success alert-dismissible fade show" role="alert">
                Info Submited Successfully <strong>Thank you</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                 </button>
              </p>`;

            })
            .catch(error => console.error('Error!', error.message))
        })
    })
    return(
        <div>
        <Headernav/>
        <div className="Text-style">
            <div class="contact">
           <div class="card mb-3 shadow">
            <div class="row">
                <div class="col-sm-5">
                    <img src="https://media.istockphoto.com/id/1365544413/video/contact-us-concept.jpg?s=640x640&k=20&c=a6o5RVk_pVTjL_YXzFQYSa76PahdhH7OLCLdv3iel_I=" alt="..." class="img-fluid h-100 object-fit-cover rounded-start"/>
                </div>
                <div class="col-sm-7 my-4">
                <div class="contact-title card-title mb-3"><h5>Contact US</h5></div>
         <div class="card-text">
            <form action="" name="ContactUs">
             <div class="form-group">
             
                 <label for="email">Email</label>
                 <input type="email" name="email" id="email" required></input>
             </div>
             <div class="form-group">
                 <label for="name">Name</label>
                 <input type="text" name="name" id="name" required></input>
             </div>
             <div class="form-group">
                 <label for="contact">Contact Number</label>
                 <input type="number" name="Contact" id="Contact" required></input>
             </div>
             <div class="form-group">
                 <label for="Message">Message</label>
                 <textarea name="Message" id="Message" cols={30} rows={2}></textarea>
                 <div id="Alert"></div>
             </div><div class="text-center">
             <button class="btn-submit">Submit</button></div>
         </form></div></div>
        </div>
        </div></div></div>
        </div>
    );
}
export default Biodata;