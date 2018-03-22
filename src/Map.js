import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker
} from 'react-google-maps';
/* global google */

class Map extends Component {
  render () {
    // Object destructuring
    const { places, selectedMarker, onSelectMarker } = this.props;
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
          onClick={(e) => { onSelectMarker(e) }}
        />
      ))}
      {selectedMarker && (
        <InfoWindow
          position={{ lat: selectedMarker.latLng.lat(), lng: selectedMarker.latLng.lng() }}
          options={{pixelOffset: new google.maps.Size(-2,-40)}}
          onCloseClick={() => { onSelectMarker(null) }}>
          <div>Hey</div>
        </InfoWindow>
      )}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)
