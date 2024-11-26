import React, {useState} from "react";

function Car()
{
    const [data,setData] = useState({brand:'Ford',model:'Mustang',color:'Red',year:1964});

    // const changeColor = () =>{
    //     //this.setState({color:"blue"});
    //     setData(prevData =>({
    //         ...prevData,color:'Blue'
    //     }));
    // }

    const changeData = (key,value) =>{
            //this.setState({color:"blue"});
            setData(prevData =>({...prevData,[key]:value}));
        };
        
    return(
    <>
    <h1 style={{color: "white", backgroundColor:data.color}}>Hi, I am a Car!</h1>
    <h1 className="text-info">My brand:{data.brand}</h1>
    <p style={{color: data.color}} className="text-info">
        It is a {data.color} {data.model} from {data.year}
    </p>
    {/* <button type="button" onClick={changeColor}>Change Color</button> */}
    <button type="button" className="btn btn-primary" onClick={() => changeData('color','blue')}>Change Color</button>
    &nbsp;
    <button type="button" className="btn btn-secondary" onClick={() => changeData('year',2022)}>Change Year</button>
    </>
    );
}

export default Car;