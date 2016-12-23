'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';

const YOUTUBE_API_KEY = require('../env.js')

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] };

    YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, function(data) {
      console.log(data);
    })
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
