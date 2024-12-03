import React from "react";

function HtmlRender()
{
    const myElement1 =(
      <table id="table1"><tbody>
        <tr key="trName"><th>Name</th></tr>
        <tr key="trJohn"><th>John</th></tr>
        <tr key="trElsa"><th>Elsa</th></tr>
        </tbody></table>
      //<h1>Hello</h1>
    );

    const myElement2 = (<p>5+5</p>);

    const myElement3 = (
        <ul>
            <li key="Apples">Apples</li>
            <li key="Bananas">Bananas</li>
            <li key="Cherries">Cherries</li>
        </ul>
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

    //const myElement = [myElement1, myElement2, myElement3, myElement4, myElement5, myElement6, myElement7];

    const myElement = [
        {id: 1, element: myElement1},
        {id: 2, element: myElement2},
        {id: 3, element: myElement3},
        {id: 4, element: myElement4},
        {id: 5, element: myElement5},
        {id: 6, element: myElement6},
        {id: 7, element: myElement7},
    ];

    return(
        //display method 1
        //myElement
        <div>

            {
                myElement.map(
                    item =>(
                        <div key={item.id}>
                            {item.element}
                        </div>    
                    )                    
                )
            }
        </div>
        //display method 2
        //myElement
            
    );
}

export default HtmlRender;