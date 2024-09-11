import { Component } from "react";
import BasicFigure1 from "./BasicFigure1";

class FigureList extends Component
{
    render()
    {
        return(
            <div style={{display:"flex"}}>
                <BasicFigure1 filename="images/dog.png" caption="Chauncey"/>
                <BasicFigure1 filename="images/chickens.png" caption="Lefty and ginger"/>
            </div>
        );
    }
}

export default FigureList;