import React, { Component } from 'react';
// Components
import Place from './Place'

class List extends Component {
  render() {
    return (
      <div className="list">
        <div className="search">
          <input type="text"/>
        </div>
        <div className="places-list">
          <ul>
            {this.props.places.map((place, index) => (
              <Place
                key={index}
                place={place}/>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default List
