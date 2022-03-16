import logo from '../.././logo.svg';
import './App.css';
import {Business} from '../Business/Business.js';
import {BusinessList} from '../BusinessList/BusinessList.js';
import {SearchBar} from '../SearchBar/SearchBar.js';
import React from 'react';

export default class App extends React.Component {
  render()
    {
      return (
        <div className="App">
          <h1>ravenous</h1>
          <SearchBar/>
          <BusinessList/> 
        </div>
      )
    }
}


