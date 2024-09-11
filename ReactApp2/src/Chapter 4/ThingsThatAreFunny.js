import React from "react";

function ThingsThatAreFunny(props)
{
    return(
        <>
            <h1>here are some funny things.</h1>
            {props.children}
        </>

    );

}

export default ThingsThatAreFunny;