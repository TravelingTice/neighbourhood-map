import React, { Component } from 'react';

class Place extends Component {
  render() {
    const { place, selectedPlace, onSelectPlace } = this.props
    // Add class 'selected' to place that is selected on the map
    let className;
    if (selectedPlace) {
      const selected = selectedPlace.name
      if (selected === place.name) {
        className = 'selected'
      } else {
        className = 'unselected'
      }
    }

    return (
      <li onClick={() => {onSelectPlace(place)}} className={className}>
        {place.name}
      </li>
    )
  }
}

export default Place
