import React, { Component } from "react";
import { Consumer } from "./Context";
class Grandchild extends Component
{
    render()
    {
        return(
            <div>
                <i>This is grandchild component</i>
                <Consumer>
                    {({data,handleClick}) => (
                        <div>
                            <i>Course name: {data.name}</i>
                            <i>Course city: {data.city}</i>
                            <i>Course count: {data.count}</i>

                            <button onClick = {handleClick}>Click me!</button>
                        </div>
                    )}
                </Consumer>
            </div>
        )
    }
}
export default Grandchild;