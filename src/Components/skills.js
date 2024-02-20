import React from "react";
import Headernav from '../NavBase/Headernav';
import "../Components/skill.css"
import img1 from "../images/icon-1.png"
import img2 from "../images/icon-2.png"
import img3 from "../images/icon-3.png"
import img4 from "../images/icon-4.png"
import img5 from "../images/icon-5.png"
import img6 from "../images/icon-6.png"
import img7 from "../images/icon-7.png"

function Skills(){
return(
<div>
<Headernav/>


<div className="Text-style">
<h1 class="heading">Programming Skills</h1>

<div class="box-container">

<div class="box">
<img src={img1} alt=""/>
<h3>HTML 5</h3>
<p>Lorem ipsum dolor sit ametconsecteturadipisicingelit. Minus, commodi?</p>
<a href="#" class="btn">read more</a>
</div>

<div class="box">
<img src={img2} alt=""/>
<h3>CSS 3</h3>
<p>Lorem ipsum dolor sit ametconsecteturadipisicingelit. Minus, commodi?</p>
<a href="#" class="btn">read more</a>
</div>

<div class="box">
<img src={img3} alt=""/>
<h3>JavaScript</h3>
<p>Lorem ipsum dolor sit ametconsecteturadipisicingelit. Minus, commodi?</p>
<a href="#" class="btn">read more</a>
</div>

<div class="box">
<img src={img4} alt=""/>
<h3>React.js</h3>
<p>Lorem ipsum dolor sit ametconsecteturadipisicingelit. Minus, commodi?</p>
<a href="#" class="btn">read more</a>
</div>

<div class="box">
<img src={img5} alt=""/>
<h3>Node.js + Atlas</h3>
<p>Lorem ipsum dolor sit ametconsecteturadipisicingelit. Minus, commodi?</p>
<a href="#" class="btn">read more</a>
</div>

<div class="box">
<img src={img6} alt=""/>
<h3>Node.js + Express.js</h3>
<p>Lorem ipsum dolor sit ametconsecteturadipisicingelit. Minus, commodi?</p>
<a href="#" class="btn">read more</a>
</div>
<div class="box">
<img src={img7} alt=""/>
<h3>Bootstrap</h3>
<p>Lorem ipsum dolor sit ametconsecteturadipisicingelit. Minus, commodi?</p>
<a href="#" class="btn">read more</a>
</div>
</div>
</div></div>
);
}
export default Skills;
