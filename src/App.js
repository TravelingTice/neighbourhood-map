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
    isOpen: false,
    query: ''
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
  }

  toggleList = () => {
    this.setState(prevState => ({
      isListShowing: !prevState.isListShowing
    }))
  }

  render() {
    const { places } = this.props
    const { isListShowing, isOpen, query } = this.state;
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
              places={showingPlaces}/>
          )}
        <Map
          places={showingPlaces}
          isOpen={this.state.isOpen}
          loadingElement={<div style={{ height: `100%`}} />}
          containerElement={<div style={{ height: `89vh` }} /> }
          mapElement={<div style={{ height: `100%` }} /> }
        />
      </div>
    )
  }
}

export default App;
