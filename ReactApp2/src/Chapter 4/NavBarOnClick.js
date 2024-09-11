import NavBar from "./NavBar";
import NavItem from "./NavItem";

function NavBarOnClick(props){
    return(
        <>
            <NavBar onClick={() =>{console.log('clicked');}}>
                <NavItem/>
                <NavItem/>
                <NavItem/>
            </NavBar>
        </>
    );
}

export default NavBarOnClick;