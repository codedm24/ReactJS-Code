import { Component } from "react";

class BasicFigure extends Component
{
    render(){
        return(
            <figure>
                <img src="images/dog.png" alt="a dog"/>
                <figcaption>This is a picture of a dog.</figcaption>
            </figure>
        );
    }
}
export default BasicFigure;