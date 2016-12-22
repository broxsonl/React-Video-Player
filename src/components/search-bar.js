'use strict';

const React = require('react');

// import React, { Component } from 'react';
const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // Only below do we change our state like this.
    this.state = { term: '' }
  }

  render() {
    return (
    <div>
    <input onChange={event => this.setState({ term: event.target.value})} />
    </div>
    );
  }

}

export default SearchBar;
