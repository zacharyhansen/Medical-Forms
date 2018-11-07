import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';

import MortalityMap from './MortalityMap.jsx';
import colorScaleData from '../helpers/colorScaleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.dummyData,
      renderMap: false
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    axios.get('/api/heartfailures')
      .then((data) => {
        console.log('api heart failures', data);
      })
      .catch((err) => {
        console.log(err);
      })

    // ------------------------------------------------------------------
    // TODO: Feed the data you receive back into your data visualization.
    // ------------------------------------------------------------------

  }


  handleButtonClick() {
    this.setState({
      renderMap: true
    });
  }

  renderMap() {
    if (!this.state.renderMap) {
      return null;
    }

    return (
      <MortalityMap stateMortalityScores={colorScaleData(this.state.data)}
        handleButtonClick={this.handleButtonClick}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="nav">
          <button onClick={this.handleButtonClick}>Render Map!</button>
        </div>
        <div className="map">
          {this.renderMap()}
        </div>
      </div>
    );
  }
}

export default App;
