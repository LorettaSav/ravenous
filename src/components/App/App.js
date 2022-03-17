import logo from '../.././logo.svg';
import './App.css';
import {Business} from '../Business/Business.js';
import {BusinessList} from '../BusinessList/BusinessList.js';
import {SearchBar} from '../SearchBar/SearchBar.js';
import React from 'react';

let business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses = [business, business, business, business, business, business];

export default class App extends React.Component {
  searchYelp(term,location,sortBy) {
    return console.log(`hi ${term} im at ${location} filtered by ${sortBy}`);
  }
  render()
    {
      return (
        <div className="App">
          <h1>ravenous</h1>
          <SearchBar searchYelp={this.searchYelp}/>
          <BusinessList businesses={businesses}/> 
        </div>
      )
    }
}


