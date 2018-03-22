import React, { Component } from 'react';

function ListBtn(props) {
  return (
    <button className="hide-list-btn" onClick={() => { props.toggleList()}}>Hide list</button>
  )
}

export default ListBtn
