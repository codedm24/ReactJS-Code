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
    <h1>My brand:{data.brand}</h1>
    <p style={{color: data.color}}>
        It is a {data.color} {data.model} from {data.year}
    </p>
    {/* <button type="button" onClick={changeColor}>Change Color</button> */}
    <button type="button" onClick={() => changeData('color','blue')}>Change Color</button>
    <button type="button" onClick={() => changeData('year',2022)}>Change Year</button>
    </>
    );
}

export default Car;