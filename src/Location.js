import React, { Component } from 'react';

class Location extends Component{

    constructor(props){
        super(props);
        this.state= {
            latitude:null,
            longitude:null,
            userAddress: null
        };
        this.getLocation= this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }

    getLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(this.getCoordinates);
          } else {
            alert ("Geolocation is not supported by this browser.");
          }
    }
    getCoordinates(e){
        this.setState({
          latitude: e.coords.latitude,
          longitude: e.coords.longitude, 
        })
    
    }

    render(){
        return(
            <>
            <div>
                <h2>React GeoLocation Example</h2>
                <button>Get Coordinates</button>
                <h4>HTML% coordinates</h4>
                <p>Latitude:{this.state.latitude}</p>
                <p>longitude:{this.state.longitude}</p>
                <h4>Googlemaps Reverse GeoCoding</h4>
                <p>Address:{this.state.userAddress}</p>
            </div>
            </>
        );
    }
}
export default Location;
