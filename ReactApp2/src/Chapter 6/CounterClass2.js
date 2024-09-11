import { Component } from "react";

class CounterClass2 extends Component
{
    constructor()
    {
        super();
        this.state = {count:0};
        this.testCount = 0;
        this.increment = this.increment.bind(this);
    }

    increment() {
        //async call
        // this.setState({count: this.state.count + 1});    
        // this.testCount ++;
        // this.setState({count: this.state.count + 1});    
        // this.testCount ++;
        // console.log("Count should be: " + this.testCount);
        //sync call
        this.setState((current)=>{return {count: current.count+1};});
        this.testCount ++;
        this.setState((current)=>{return {count: current.count+1};});
        this.testCount ++;
        console.log("Count should be: " + this.testCount);
    }

    render(){
        return(
            <>
            <button onClick={this.increment}>{this.state.count}</button>
            </>
        );
    }
}

export default CounterClass2;