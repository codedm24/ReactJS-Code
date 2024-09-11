import { Component } from "react";

class NewsFeed1 extends Component
{
    state = {
        date: new Date(),
        headlines:[]
    }

    render()
    {
        return(
            <>
            NewsFeed1
            <h1>Headlines for {this.state.date.toLocaleString()}</h1>
            ...
            </>
        );
    }
}

export default NewsFeed1;