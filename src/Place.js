import React, { Component } from 'react';

class Place extends Component {
  render() {
    return (
      <li>
        {this.props.place.name}
      </li>
    )
  }
}

export default Place
