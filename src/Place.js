import React, { Component } from 'react';

function Place(props) {
  // Add class 'selected' to place that is selected on the map
  let className;
  if (props.selectedPlace) {
    const selected = props.selectedPlace.name
    if (selected === props.place.name) {
      className = 'selected'
    } else {
      className = 'unselected'
    }
  }

  return (
    <li tabIndex="0"
      role="button"
      onClick={() => {props.onSelectPlace(props.place)}}
      onKeyUp={(e) => {e.key === 'Enter' ? props.onSelectPlace(props.place) : null}}
      className={className}>
      {props.place.name}
    </li>
  )
}

export default Place
