import React from 'react';
import './App.css';
import { images } from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';

class App extends React.Component {
  state = {
    filter: ''
  }

  handleImageType = (e) => {
    const type = e.target.value;

    this.setState({filter: type})
  }

  render() {
    const filteredImages = images.filter(image => image.keyword === this.state.filter)
    console.log(filteredImages);
    return(
      <>
        <Header/>
          <label>Select Your Hanimal Here!
          <select onChange={this.handleImageType} name="images">
            {
              images.map(image => <option key={image.url} value={image.keyword}>{image.keyword}</option>)
            }
          </select>
          </label>
        {
          filteredImages.map(image => <p>{image.title}</p>)
        }
        <ImageList images={filteredImages} />
      </>
    )
  }
}

export default App;
