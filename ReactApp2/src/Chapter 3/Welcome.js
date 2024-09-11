import Header from "./Header";
import CustomHeader from "./CustomHeader";
import Login from "./Login";

function Welcome(props){

    /*
    // let header = <Header/>;
    let customHeader = <CustomHeader HeaderText="ReactJS"/>;
    let header;
    if(props.loggedIn === 'true')
    {
        header=<CustomHeader HeaderText="Hello"/>;
    }
    else
    {
        header=<Login/>;
    }
   return( 
        <>
            <div>
                {header}
            </div>
        </>
    );
    */
   /*
    return(
        <>
        <div>
               {props.loggedIn ==='true' && <Header/>} 
               Note: if you don't see the header message,
               you are not logged in.
        </div>
        </>
    );
    */
   return(
<div>
    {props.loggedIn === 'true'? <Header/> : <Login></Login>}
</div>

   );
}

export default Welcome;