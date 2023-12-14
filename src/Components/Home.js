import React from "react";
import Headernav from "../NavBase/Headernav";
function Home(){
    return(
        <div>
        <Headernav
        Title={"Full Stack Developer"}
        Description = {"This is my Resume"}
        >
            <div className="items">
                <div className="inline">
        <h2><span><a href="https://github.com/Dineshds05" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="git-name" className="git"/></a></span><span className="gap"><a href="https://www.linkedin.com/in/dinesh-kumar-r-68bbb7254/?trk=public-profile-join-page" target="_blank"><img src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png" alt="linked-name" className="git"/></a></span></h2>
        </div>
        <div className="image">
            <h1 className="text"><span>Hi i am Dineshkumar!</span></h1>
        </div>
        </div>
        </Headernav>
        </div>
    );
}
export default Home;