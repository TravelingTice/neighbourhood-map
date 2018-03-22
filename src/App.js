import React, { Component } from 'react';
// Npm packages
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
// Components
import Heading from './Heading';
import ListBtn from './ListBtn';
import List from './List';
import Map from './Map';

class App extends Component {
  state = {
    isListShowing: true,
    query: '',
    selectedPlace: null
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
    if (place == null) {
      this.setState({ selectedPlace: null })
      return
    }
    this.setState({ selectedPlace: place })
  }

  render() {
    const { places } = this.props
    const { isListShowing, query, selectedPlace } = this.state;
    // Filter our places matching the search query
    let showingPlaces;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingPlaces = places.filter(place => match.test(place.name));
    } else {
      showingPlaces = places;
    }
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
              selectedPlace={selectedPlace}/>
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
