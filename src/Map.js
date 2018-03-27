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
    const { places, selectedPlace, onSelectPlace } = this.props;
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
          onClick={() => { onSelectPlace(place) }}
        />
      ))}
      {selectedPlace && (
        <InfoWindow
          position={{ lat: selectedPlace.position.lat, lng: selectedPlace.position.lng }}
          options={{pixelOffset: new google.maps.Size(-2,-40)}}
          onCloseClick={() => { onSelectPlace(null) }}>
          <div className="infowindow"><h2>{selectedPlace.name}</h2>
            <div>
              <img src={selectedPlace.wikiImg} alt=""></img>
              <p>{selectedPlace.wikiDesc}</p>
              <a href={selectedPlace.wikiHref} target="_blank">Go To the Wikipedia page</a>
            </div>
          </div>
        </InfoWindow>
      )}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)
