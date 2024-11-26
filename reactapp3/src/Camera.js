import React from 'react'

class Camera extends React.Component
{
    constructor(props)
    {
        super();
        this.cameratype = props.cameratype;
    }

    render(){
        return <h2>Hi, I am a {this.cameratype} Camera!(using class component)</h2>
    }
}

export default Camera