import React from 'react';
// Components
import Place from './Place';

function List(props) {
  return (
    <div className="list">
      <div className="search">
        <input
        onChange={(e) => {props.updateQuery(e.target.value)}}
        value={props.query}
        type="text"/>
      </div>
      <div className="places-list">
        <ul>
          {props.places.map((place, index) => (
            <Place
              key={index}
              place={place}
              selectedPlace={props.selectedPlace}
              onSelectPlace={props.onSelectPlace}
              />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default List
