import React, { Component } from "react";
class Param extends Component
{
    constructor()
    {
        super();
        this.state = {
            name : "nick",
            age : 12,
            age2: 220,
            dob: 2002,
        }
    }
sum = (age2,dob) => {
    console.log(age2+dob);
    console.log(this.state.age+this.state.dob);
    console.log(typeof(this.state.age+this.state.dob));    
}
count = (age2) => {

    var count = this.state.age2 + 1;
    this.setState({age2:count})
     if( count%2 === 0)
     {
        console.log(count);
        console.log("Even");
     }
     else
     {
        console.log(count);
        console.log("odd");
     }
     

}
    render()
    {
        return(
            <div>

                
                <h2>{this.state.sum}</h2>
                { <button onClick={this.count.bind(this,this.state.age2)}>Count!</button> }
                <button onClick={this.sum.bind(this,this.state.age2,this.state.dob)}>Sum!</button>
            </div>

            
        )
    }
}
export default Param;