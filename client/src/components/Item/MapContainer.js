import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import ReactDOM from 'react-dom';
import MapDisplay from "./MapDisplay";


export class GMap extends React.Component {
  render() {
    const style = {
      width: '50vw',
      height: '50vh'
    }
    return (
      <div style={style}>
        <Map
          google={this.props.google}
          className={Map}
          zoom={15}
        >
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB-1vqM3RAOcfF53cIoYb0b6-d5-F9SCOI')
})(GMap)