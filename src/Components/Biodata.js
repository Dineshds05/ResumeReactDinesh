import React from "react";
import Headernav from '../NavBase/Headernav';
function Biodata(){
    return(
        <div>
        <Headernav/>
        <div className="Text-style">
        <h2 className="pHead"><u>Personal Details</u></h2>
        <ul>
            <li>Date of Birth : 06.06.1997</li>
            <li>Gender : Male</li>
            <li>Father Name : Ramalingam M</li>
            <li>Nationality : Indian</li>
            <li>Marital Status : Single</li>
            <li>Languages known : English, Tamil</li>
        </ul>
        </div>
        </div>
    );
}
export default Biodata;