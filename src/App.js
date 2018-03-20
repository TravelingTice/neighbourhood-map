import React, { Component } from 'react';

//Components
import Map from './Map';

class App extends Component {
  render() {
    return (
      <Map
        loadingElement={<div style={{ height: `100%`}} />}
        containerElement={<div style={{ height: `100vh` }} /> }
        mapElement={<div style={{ height: `100%` }} /> }
      />
    )
  }
}

export default App;
