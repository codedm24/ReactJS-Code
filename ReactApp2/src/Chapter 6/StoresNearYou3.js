import { Component } from "react";
import Map from "./Map";
import StoreList from "./StoreList";

class StoresNearYou3 extends Component
{
    render(){
        return(
            <>
            StoresNearYou3
            <div id="Map-Container">
                <Map 
                    latitude = {this.props.latitude}
                    longitude = {this.props.longitude}/>
            </div>
            <div id="store-list">
                <StoreList
                latitude = {this.props.latitude}
                longitude = {this.props.longitude} />
            </div>
        </>
        );
    }
}

StoresNearYou3.defaultProps ={
    latitude:"37.3230",
    longitude:"122.0322"
}

export default StoresNearYou3;