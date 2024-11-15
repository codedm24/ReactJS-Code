import { Component } from "react";  

class CounterClass extends Component
{
    constructor()
    {
        super();
        this.state = {count:0};
        this.increment = this.increment.bind(this);
    }

    increment(){
        this.setState({count : this.state.count+1});
    }

    render()
    {
        return(<button onClick={this.increment}>{this.state.count}</button>);
    }
}

export default CounterClass;