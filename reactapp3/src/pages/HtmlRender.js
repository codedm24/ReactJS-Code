import React from "react";

function HtmlRender()
{
    const myElement1 =(
      <table><tr><th>Name</th></tr><tr><th>John</th></tr><tr><th>Elsa</th></tr></table>
      //<h1>Hello</h1>
    );

    const myElement2 = (5+5);

    const myElement3 = (
        <uL>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
        </uL>
    );

    const myElement4 = (
        <div>
            <p>I am a paragraph</p>
            <p>I am a paragraph too.</p>
        </div>
    );

    const myElement5 = (
    <>
    <label name="label1" className="font-weight-bold">Name: </label>
    <input type="text" className="form-control-sm" name="inputName"/>
    </>
    );

    const x = 5;
    let text = "Goodbye!";
    if(x < 10){
        text = "Hello";
    }

    const myElement6 = (<><p className="container pt3 text-center font-weight-bolder"> {text} </p></>);

    const myElement7 = (<h1>{(x) < 10 ? "Hi" : "Hello"}</h1>);

    const myElement = [myElement1, myElement2, myElement3, myElement4, myElement5, myElement6, myElement7];

    return(
        //display method 1
        <>
            {myElement}
        </>
        //display method 2
        //myElement
            
    );
}

export default HtmlRender;