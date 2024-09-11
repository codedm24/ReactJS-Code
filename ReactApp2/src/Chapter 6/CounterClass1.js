import { Component } from "react";  

class CounterClass1 extends Component
{
    constructor()
    {
        super();
        this.state = {count1:0, count2:0};
        this.incrementCount1 = this.incrementCount1.bind(this);
        this.incrementCount2 = this.incrementCount2.bind(this);
    }

    incrementCount1(){
        this.setState({count1 : this.state.count1+1});
    }

    incrementCount2(){
        this.setState({count2 : this.state.count2+1});
    }

    render()
    {
        return(
            <>
            <div>
            CounterClass1<br/>
            <button onClick={this.incrementCount1}>{this.state.count1}</button>
            <button onClick={this.incrementCount2}>{this.state.count2}</button>
            </div>
            </>);
    }
}

export default CounterClass1;