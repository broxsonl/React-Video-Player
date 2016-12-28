'use strict';

const React = require('react');

// import React, { Component } from 'react';
const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // We initialize the state for term to an empty string.
    this.state = { term: '' }
  }

  render() {
    return (
    <div className="search-bar">
    <input
      value={this.state.term}
      onChange={event => this.setState({ term: event.target.value})} />
    </div>
    );
  }

}

export default SearchBar;
