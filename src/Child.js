import React, { Component } from "react";
import Grandchild from './Grandchild';
class Child extends Component
{
    render()
    {
        return(
            <div>
                <i>This is child component</i>
                <Grandchild/>
            </div>
        )
    }
}
export default Child;