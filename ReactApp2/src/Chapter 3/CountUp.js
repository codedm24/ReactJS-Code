import {useState} from 'react';

function CountUp(){
    const[count,setCount] = useState(0);

    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Add One</button>
            &nbsp;&nbsp;<label>Counter: {count}</label>
            
        </div>
    );
}
export default CountUp;
