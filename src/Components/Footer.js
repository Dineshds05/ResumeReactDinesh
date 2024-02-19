import React from 'react'
import {FaHome, FaPhoneAlt, FaEnvelope, FaPrint} from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Footer = () => {
  return (
    <div class='container-fluid footer mt-2'>
        <div class='row py-4 text-white offset-1'>
        <div class='col-md-2 col-sm-12 mr-3'>
            <h4 class='text-warning'>Company Name</h4>
            <p class=''>No-21, Malaipalayam,</p>
            <p class=''>Karunguzhi,</p>
            <p class=''>Chengalpattu,</p>
            <p class=''>603303.</p>

        </div>
        <div className='col-md-2 col-sm-12'>
            <h4 class='text-warning'>Services</h4>
            <p>About</p>
            <p>Return Policy</p>
            <p>Customer serv</p>
            <p>Customer serv</p>

        </div>
        <div className='col-md-2 col-sm-12'>
            <h4 class='text-warning'>Useful Links</h4>
            <p>Sitemap</p>
            <p>Shipping Rates</p>
            <p>Affiliate Program</p>
            <p>Affiliate Program</p>

        </div>
        <div className='col-md-3 col-sm-12'>
           <h4 class='text-warning'>Address</h4>
           <p><FaHome/> Dineshkumar...</p>
           <p><FaPhoneAlt/> 8838464921</p>
           <p><FaEnvelope/> dineshbsc884@gmail.Com</p>
           <p><FaPrint/> +918838464921</p>
           </div>
           <div class="col-md-3 text-bottom"><p>@{new Date().getFullYear()} Terms And Conditions</p></div>
        </div>
    </div>
  )
}

export default Footer
