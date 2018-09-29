import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import ReactDOM from 'react-dom';


export class MapDisplay extends React.Component {
    constructor(props) {
      Map.propTypes = {
        google: React.PropTypes.object,
        zoom: React.PropTypes.number,
        initialCenter: React.PropTypes.object,
        centerAroundCurrentLocation: React.PropTypes.bool
      }
      Map.defaultProps = {
        zoom: 13,
        initialCenter: {
          lat: 33.6694,
          lng: -117.8231
        },
        centerAroundCurrentLocation: false
      }
      super(props);
  
      const { lat, lng } = this.props.initialCenter;
      this.state = {
        currentLocation: {
          lat: lat,
          lng: lng
        }
      }
    }
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.google !== this.props.google) {
        this.loadMap();
      }
      if (prevState.currentLocation !== this.state.currentLocation) {
        this.recenterMap();
      }
    }
    recenterMap() {
      const map = this.map;
      const curr = this.state.currentLocation;
  
      const google = this.props.google;
      const maps = google.maps;
  
      if (map) {
        let center = new maps.LatLng(curr.lat, curr.lng)
        map.panTo(center)
      }
    }
    componentDidMount() {
      if (this.props.centerAroundCurrentLocation) {
        if (navigator && navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((pos) => {
            const coords = pos.coords;
            this.setState({
              currentLocation: {
                lat: coords.latitude,
                lng: coords.longitude
              }
            })
          })
        }
        this.loadMap();
        this.forceUpdate();
      }
    }
    loadMap() {
      if (this.props && this.props.google) {
        //google is available
        const { google } = this.props;
        const maps = google.maps;
  
        const mapRef = this.refs.map;
        const node = ReactDOM.findDOMNode(mapRef);
  
        let { initialCenter, zoom } = this.props;
        const { lat, lng } = initialCenter;
        const center = new maps.LatLng(lat, lng);
        const mapConfig = Object.assign({}, {
          cener: center,
          zoom: zoom
        })
  
        this.map = new maps.Map(node, mapConfig);
      }
    }
    render() {
      return (
        <div ref='map'>
          Loading map...
        </div>
      )
    }
  }

  