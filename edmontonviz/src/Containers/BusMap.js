import React, {Component} from 'react';
import { Button } from "shards-react";
import ReactDOM from 'react-dom';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { Icon } from 'antd';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYXBhZXRzY2giLCJhIjoiY2p3MmdwZDF6MHdidzN5cWpsNmU3a3lodCJ9.kSc8lnPKUPgeAY6Jr-PxBw'
});

class BusMap extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

  render() {
    return (
        <div>
        <Map
            style="mapbox://styles/apaetsch/cjw2k3na404qn1csfznqo90z7"
            containerStyle={{ width: '85vw', height: '80vh'}}
            center={this.props.center}
           >
        </Map>
        </div>
    );
  }
}

export default BusMap;