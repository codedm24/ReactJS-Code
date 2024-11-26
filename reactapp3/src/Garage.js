import Car from './Car.js';

function Garage()
{
    return(
        <div className='bg-dark'>
            <h1 className='text-warning'>Who lives in my Garage?</h1>
            <Car />
        </div>
    );
}

export default Garage;