import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker
} from 'react-google-maps';

class Map extends Component {
  render () {
    // Object destructuring
    const { places } = this.props;

    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 52.185150, lng: 4.422546 }}
      >
      {places.map(place => (
        <Marker
          key={place.name}
          title={place.name}
          position={place.position}
        />
      ))}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)
