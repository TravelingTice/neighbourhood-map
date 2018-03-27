import React, { Component } from 'react';
// Npm packages
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
// Utilities
import places from './Utilities/places';
// Components
import Heading from './Heading';
import ListBtn from './ListBtn';
import List from './List';
import Map from './Map';

class App extends Component {
  state = {
    isListShowing: true,
    query: '',
    selectedPlace: null,
    places: places
  }

  toggleList = () => {
    this.setState(prevState => ({
      isListShowing: !prevState.isListShowing
    }))
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
  }

  selectPlace = (place) => {
    // Close place if place is null or marker is clicked on again.
    if (place == null || place === this.state.selectedPlace) {
      this.setState({ selectedPlace: null })
      return
    }
    this.getWikiPediaInfo(place);
  }

  getWikiPediaInfo(place) {
    // First request = text + link
    const url = `https://${place.wikiLang}.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${place.wikiName}&format=json`;
    fetch(url, { async: true })
    .then(resp => {
        return resp.json()
    }).then(data => {
      place.wikiHref = data[3][0];
      place.wikiDesc = data[2][0];
  }).catch(err => {
    // When an error occurs, the user will be notified by displaying a custom error message in the infowindow
    place.wikiHref = 'https://www.wikipedia.org/';
    place.wikiDesc = 'Sorry, the Request to WikiPedia has failed, try again later! Error message: ' + err;
    place.wikiImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Article_icon_cropped.svg/512px-Article_icon_cropped.svg.png';
    console.log('Error', err)
    this.setState({ selectedPlace: place })
  })
  // Second request = image
  const url2 = `https://${place.wikiLang}.wikipedia.org/w/api.php?action=query&&origin=*&format=json&prop=pageimages&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail&pithumbsize=250&pilimit=20&gpssearch=${place.wikiName}&gpslimit=20`
  fetch(url2, { async: true })
  .then(resp => {
    return resp.json()
  }).then(imgData => {
    if (imgData.query.pages[0].thumbnail.source) {
      place.wikiImg = imgData.query.pages[0].thumbnail.source;
    } else {
      place.wikiImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Article_icon_cropped.svg/512px-Article_icon_cropped.svg.png';
    }
    this.setState({ selectedPlace: place })
  }).catch(err => {
    place.wikiImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Article_icon_cropped.svg/512px-Article_icon_cropped.svg.png';
    console.log('Error', err)
    this.setState({ selectedPlace: place })
  })
}

  render() {
    const { isListShowing, query, selectedPlace, places } = this.state;
    // Filter our places matching the search query
    let showingPlaces;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingPlaces = places.filter(place => match.test(place.name));
    } else {
      showingPlaces = places;
    }

    showingPlaces.sort(sortBy('name'))

    return (
      <div className="container">
        <Heading/>
        <ListBtn
          toggleList={this.toggleList}
          isListShowing={this.state.isListShowing}/>
          {isListShowing && (
            <List
              updateQuery={this.updateQuery}
              query={query}
              places={showingPlaces}
              selectedPlace={selectedPlace}
              onSelectPlace={this.selectPlace}/>
          )}
        <Map
          places={showingPlaces}
          selectedPlace={selectedPlace}
          onSelectPlace={this.selectPlace}
          loadingElement={<div style={{ height: `100%`}} />}
          containerElement={<div style={{ height: `89vh` }} /> }
          mapElement={<div style={{ height: `100%` }} /> }
        />
      </div>
    )
  }
}

export default App;
