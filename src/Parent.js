import React, { Component } from "react";
import { Provider } from "./Context";
import Child from "./Child";
class Parent extends Component
{
    constructor()
    {
        super();
        this.state = {
            name : 'Computer science',
            city: 'kathmadu',
            count: 1
        }
    }

    handleCount = () => {
        this.setState({count: this.state.count + 1});   
    }
    render()
    {
        const ContextValue = {
            data: this.state,
            handleClick: this.handleCount,
        }
        return(
            <div>
                <h3>Using context: Parent Component</h3>
                <Provider value ={ContextValue}>
                    <Child/>
                </Provider>
            </div>
        )
    }
}
export default Parent;