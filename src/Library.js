import React, { Component } from "react";
class Library extends Component
{
    constructor()
    {
        super();
        this.showDetail = this.showDetail.bind(this);
        this.state = {
            books:"percy jackson",
            author:"uncle rick",
            isdn:19800,
            date:2003,
        }
    }
    myEvent = () => {
        console.log("Button is clicked");
        // document.getElementById('lib').innerHTML = this.state.author;
        // alert(this.state.books);
        this.setState({
            author : "rick riordian",
        });
    }
    showDetail()
    {
        this.setState({books: "harry potter" , author :"JK rowling"});
        console.log(this.setState({books: "secret of chambers"}));
    }
    render()
    {
        console.log(this.state.books);
        return(
            <div>
                <h2>Data = {this.state.author}</h2>
                <h2>Data = {this.state.books}</h2>
                
                <button onClick={this.showDetail}>Click!</button>

            </div>
        )
    }
}
export default Library;