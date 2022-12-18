import React from "react";
import './style.css';
import img from './img.jpeg';
 function Home()
 {
    return(
        <div className="home">
             <img src={img} className="logo" alt="flower" />
            <div className="intro">
            <i>White as a concept, starting point and lifrstyle.</i>
            <p>The emotions and slow philosophy as the root where the essence of each project originates.</p>
            </div>
           
        </div>
    )
 }

export default Home;