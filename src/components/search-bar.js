'use strict';

const React = require('react');

// import React, { Component } from 'react';
const Component = React.Component;

class SearchBar extends Component {
  render() {
    // The below html element will emit a change event, and that will run our onInputChange handler when it does.
    return <input onChange={this.onInputChange} />
  }

  //event handler. Whenever the input changes, run the code inside
  onInputChange() {
    
  }
}

export default SearchBar;
