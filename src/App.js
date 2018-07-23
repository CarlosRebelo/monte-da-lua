import React, { Component } from 'react';
import Card from './Components/Card/Card'
import Content from './Components/Content/Content'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='background'>
        <Card />
        <Content />
      </div>
    );
  }
}

export default App;
