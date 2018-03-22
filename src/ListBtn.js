import React, { Component } from 'react';

function ListBtn(props) {
  const txt = props.isListShowing ? 'Hide list' : 'Show list';
  return (
    <button className="hide-list-btn" onClick={() => { props.toggleList()}}>{txt}</button>
  )
}

export default ListBtn
