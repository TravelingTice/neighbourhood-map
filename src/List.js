import React, { Component } from 'react';
// Components
import Place from './Place';

class List extends Component {
  render() {
    const { updateQuery, query, places, selectedPlace, onSelectPlace } = this.props

    return (
      <div className="list">
        <div className="search">
          <input
          onChange={(e) => {updateQuery(e.target.value)}}
          value={query}
          type="text"/>
        </div>
        <div className="places-list">
          <ul>
            {places.map((place, index) => (
              <Place
                key={index}
                place={place}
                selectedPlace={selectedPlace}
                onSelectPlace={onSelectPlace}
                />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default List
