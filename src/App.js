import React, { Component } from 'react';
//Components
import Heading from './Heading';
import ListBtn from './ListBtn';
import List from './List';
import Map from './Map';

class App extends Component {
  state = {
    isListShowing: true,
    isOpen: false
  }

  toggleList = () => {
    this.setState(prevState => ({
      isListShowing: !prevState.isListShowing
    }))
  }

  render() {
    const places = this.props.places;

    return (
      <div className="container">
        <Heading/>
        <ListBtn
          toggleList={this.toggleList}
          isListShowing={this.state.isListShowing}/>
        <List
          places={places}/>
        <Map
          places={places}
          isOpen={this.state.isOpen}
          loadingElement={<div style={{ height: `100%`}} />}
          containerElement={<div style={{ height: `100vh` }} /> }
          mapElement={<div style={{ height: `100%` }} /> }
        />
      </div>
    )
  }
}

export default App;
