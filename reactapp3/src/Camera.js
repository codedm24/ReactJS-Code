import React from 'react'

class Camera extends React.Component
{
    constructor(props)
    {
        super(props);
        this.cameratype = props.cameratype;
        this.state = {favoriteBrand: "ABC"};
    }

    static getDerivedStateFromProps(props, state)
    {
        return {favoriteBrand : props.favbrand}
    }

    changeColor = ()=>{
        this.setState({favoriteBrand: "JKL"});
    }

    componentDidMount()
    {
        setTimeout(()=>{
            this.setState({favoriteBrand: "DEF"});
        },1000);
    }

    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeUpdate(prevPros, prevState){
        document.getElementById("spanprevBrand").innerHTML = "Before the update favorite was " + prevState.favoriteBrand;

    }

    componentDidUpdate(){
        document.getElementById("spanupdateBrand").innerHTML =
        "The updated favorite is: " + this.state.favoriteBrand;
    }

    componentWillUnmount(){
        alert("The component will unmount");
    }

    render(){
        return (
            <>
            <h2>Hi, I am a {this.cameratype} {this.state.favoriteBrand} Camera!(using class component)</h2>
            <button type="button" className='btn btn-warning' onClick={this.changeColor}>Change Color</button>
            &nbsp;&nbsp;<span id="spanprevBrand"></span>
            &nbsp;&nbsp;<span id="spanupdateBrand"></span>
            </>
        );
    }
}

export default Camera