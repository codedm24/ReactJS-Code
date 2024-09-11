import { Component } from "react";
import Map from "./Map";
import StoreList from "./StoreList";

class StoresNearYou2 extends Component
{
    static defaultProps = {
        latitude: "37.3230",
        longitude: "122.0322"
    }

    render(){
        return(
            <>
            StoresNearYou2
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

export default StoresNearYou2;