import { Component } from "react";

class NewsFeed extends Component
{
    constructor()
    {
        super();
        this.state = {
            date: new Date(),
            headlines:[]
        }
    }

    render()
    {
        return(
            <>
                NewsFeed
                <h1>Headlines for {this.state.date.toLocaleString()}</h1>
            </>
        );
    }
}

export default NewsFeed;