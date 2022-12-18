import React, { Component } from "react";
class CF extends Component
{
    constructor()
    {
        super();
        this.state = {
            name : " ",
            phone: " ",
            address: " ",
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
        this.setState({[e.target.phone]:e.target.value});
        this.setState({[e.target.address]:e.target.value});



    }

    handleSubmit = (e) => {
        e.preventDefault();
        // stops single page from refreshing while submitting
        console.log(this.state.name+"..."+this.state.phone+"..."+this.state.address);
    }
    render()
    {
        return(
            <div>
                <h2>Controlled Form</h2>
                <form onSubmit={this.handleSubmit}>
                Name:  <input type = "text" name = "name" value = {this.state.name} onChange={this.handleChange}/> <br/>
                Phone: <input type = "number" name = "phone" value = {this.state.phone} onChange={this.handleChange}/><br/>
                Address: <input type = "text" name = "address" value = {this.state.address} onChange={this.handleChange}/><br/>
                
                <button>Submit!</button>
                </form>
                <i>Name is : {this.state.name}</i><br/>
                <i>address is : {this.state.address}</i><br/>
                <i>Phone is : {this.state.phone}</i>
            </div>
        )
    }
}

export default CF;