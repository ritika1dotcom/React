import React from "react";
import LoremIpsum from "react-lorem-ipsum";
function About()
{
    return(
        <div className="home">
             <div className="intro1">
                <LoremIpsum p = {1} />  
            </div>
            <div className="about">
                <h2>about</h2>
            </div>
           
           
        </div>
    )
}
export default About;