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
    // Get center position of selected place, when there is one
    let centerPos = {
      lat: 52.190810, lng: 4.441904
    }
    if (selectedPlace) {
      centerPos.lat = selectedPlace.position.lat
      centerPos.lng = selectedPlace.position.lng
    }
    return (
      <GoogleMap
        defaultZoom={12}
        ref={(map) => map && map.panTo({lat: centerPos.lat, lng: centerPos.lng })}
      >
      {places.map(place => (
        <Marker
          animation={place === selectedPlace ? google.maps.Animation.BOUNCE : null}
          key={place.name}
          title={place.name}
          position={place.position}
          onClick={(marker) => {
            onSelectPlace(place);
          }}
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
              <p className="credits">Made possible by the <a href="https://www.mediawiki.org/wiki/API:Main_page">WikiPedia API</a></p>
            </div>
          </div>
        </InfoWindow>
      )}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)
