import React, { Component } from 'react';
// Utilities
import places from './Utilities/places';
//Components
import Heading from './Heading';
import ListBtn from './ListBtn';
import List from './List';
import Map from './Map';

class App extends Component {
  state = {
    places: places
  }
  render() {
    return (
      <div className="container">
        <Heading/>
        <ListBtn/>
        <List
          places={this.state.places}/>
        <Map
          places={this.state.places}
          loadingElement={<div style={{ height: `100%`}} />}
          containerElement={<div style={{ height: `100vh` }} /> }
          mapElement={<div style={{ height: `100%` }} /> }
        />
      </div>
    )
  }
}

export default App;
