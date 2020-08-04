import React from 'react';
import './App.css';
import { images } from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';

class App extends React.Component {
  state = {
    filter: ''
  }

  render() {
    return(
      <Header/>
    )
  }
}

export default App;
