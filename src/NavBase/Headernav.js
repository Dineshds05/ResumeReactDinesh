import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../NavBase/Navbar.css";


function Headernav({Title,Description,children}){
return (
<div className="contain">
              {/* Bootstrap Nav */} 



<nav>
<Navbar/>
        {/* <div className="nav-head">R.DINESH KUMAR</div>

<ulclassName="menu-s">
<li className="home"><button className="nav-btn" onClick={()=>navigate("/Home")}>
        Home
</button></li>

<li><button className="nav-btn" onClick={()=>navigate("/Education")}>
         Educations
</button></li>

<li><button className="nav-btn" onClick={()=>navigate("/skills")}>
         Skills
</button></li>

<li><button className="nav-btn" onClick={()=>navigate("/projects")}>
        Projects
</button></li>

<li><button className="nav-btn" onClick={()=>navigate("/biodata")}>
        Bio-Data
</button></li>

<li><button className="nav-btn" onClick={()=>navigate("/contactdetails")}>
        Contact Details
</button></li>


</ul>*/}
</nav>

<div className="main-container">
<main className="items">
<h1 class="my-3">{Title}</h1>
<h3 class="d-flex justify-content-center">
                    {children}
</h3>
<h3>{Description}</h3>

</main>
</div>
</div>
    );
  }

export default Headernav;


function Navbar(){
const navigate = useNavigate();
return(
<div>
<nav class="navbar navbar-expand-lg navbar-dark sticky-top">
<div class="container-fluid">
<a class="navbar-brand ps-5" href="#">R.DINESH KUMAR</a>
<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
<div class="offcanvas-header">
<h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Resume Tabs</h5>
<button type="button" class="btn-close text-reset btn-close-white btn-border-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">
<ul class="navbar-nav justify-content-end flex-grow-1 pe-4 mx-6">
<li class="nav-item d-flex justify-content-center">
<button type="button" class="nav-link active mx-2" aria-current="page" onClick={()=>navigate("/Home")}>Home</button>
</li>
<li class="nav-item d-flex justify-content-center mx-2" aria-current="">
<button type="button" class="nav-link" onClick={()=>navigate("/Education")}>Education</button>
</li>
<li class="nav-item d-flex justify-content-center mx-2">
<button type="button" class="nav-link" onClick={()=>navigate("/skills")}>
         Skills
</button></li>

<li class="nav-item d-flex justify-content-center mx-2">
<button type="button" class="nav-link" onClick={()=>navigate("/projects")}>
        Projects
</button></li>

<li class="nav-item d-flex justify-content-center mx-2">
<button type="button" class="nav-link" onClick={()=>navigate("/biodata")}>
        Contact
</button></li>
</ul>
</div>
</div>
</div>
</nav>
</div>
    );
  }


 


  