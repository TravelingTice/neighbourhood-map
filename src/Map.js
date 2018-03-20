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
        defaultZoom={12}
        defaultCenter={{ lat: 52.184682, lng: 4.471170 }}
      >
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)
