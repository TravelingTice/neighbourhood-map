import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker
} from 'react-google-maps';

class Map extends Component {
  render () {
    return (
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
      >
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)
