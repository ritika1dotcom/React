import React, { Component } from "react";
import './style.css';
class Page extends Component
{
    render()
    {
        const myText = {
            color: 'blue',
            fontSize: 'bold',
            backgroundColor: '#ff6347', 
        }
        return(
            <div>
                <h2 style = {myText}>This is using CSS </h2>
                <h2 className="txtStyle">This is using external CSS</h2>
            </div>
        )
    }
}
export default Page;