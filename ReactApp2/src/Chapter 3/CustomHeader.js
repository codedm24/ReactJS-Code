function CustomHeader(props){
return(
<h1 style={{fontSize:"24px",color:"blue"}}>
    {/*Todo: Make this header dynamic */}
    {props.HeaderText}
</h1>

);

}
export default CustomHeader;