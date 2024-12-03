import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, incrementByAmount } from './reducers/counterSlice';

export function Counter(){
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <p className="h1 font-weight-bold">
                <span>{count}</span> 
            </p>
            <div className='container border border-dark'>
                <button aria-label="Increment value"
                    onClick={()=>dispatch(increment())}>Increment</button>
    
                <button aria-label="Decrement value"
                    onClick={()=>dispatch(decrement())}>Decrement</button>
            </div>
            <div className='container border border-light'>
                <button aria-label="Increment by 5"
                    onClick={()=>dispatch(incrementByAmount(5))}>Increment by 5</button>
            </div>
        </div>
    );
}

export default Counter;