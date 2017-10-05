import React, { Component } from 'react';
import {Swappable} from '@shopify/draggable';
import './App.css';

class App extends Component {

  componentDidMount(){

    const swappable = new Swappable(document.querySelectorAll('ul'), {
      draggable: 'li',
    });

    swappable.on('swappable:start', () => console.log('swappable:start'))
    swappable.on('swappable:swapped', () => console.log('swappable:swapped'));
    swappable.on('swappable:stop', () => console.log('swappable:stop'));  

  }

  render() {
    return (
      <div>
        <ul>
          <li>Ti</li>
          <li>Un</li>
          <li>Besito</li>
          <li>Pa</li>
        </ul>
      </div>
    );
  }
}

export default App;
