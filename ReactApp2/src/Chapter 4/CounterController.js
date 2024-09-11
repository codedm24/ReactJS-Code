import { useState } from "react";
import CounterClassErrorHandling from './CounterClassErrorHandling';

function CounterController()
{
    const[displayCounter,setDisplayCounter] = useState('true');

    function toggleCounter(){
        setDisplayCounter(!displayCounter);
    }

    return(
        <div className="App">
            {displayCounter ? <CounterClassErrorHandling/> : null}
            <button onClick={toggleCounter}>Toggle Count</button>
        </div>
    );

}
export default CounterController;