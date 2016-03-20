/** @jsx React.DOM */
'use strict';

let InputForm = require('./InputForm');
let GraphSVG = require('./GraphSVG');
let React = require('react');
var Wave = require('../../controllers/index.js')().waves6.Wave;

class Graph extends React.Component {

  constructor() {
    super();
    this.handleStateChange = this.handleStateChange.bind(this);
    this.wave = new Wave();
    this.state = this.wave.data;
  }
  handleStateChange(newState) {
    this.wave.update(newState);

    this.setState(newState);
  }
  render() {
    var fields = [{
      key: 'amp1',
      name: 'Amplitude 1'
    }, {
      key: 'freq1',
      name: 'Frequency 1'
    }, {
      key: 'amp2',
      name: 'Amplitude 2'
    }, {
      key: 'freq2',
      name: 'Frequency 2'
    }];

    return (
      <div>
        <InputForm fields={fields} onInputChange={this.handleStateChange}/>
        <GraphSVG wave={this.wave} />
        {JSON.stringify(this.state)}<br />
         {JSON.stringify(this.wave)}
      </div>
    );
  }
}

module.exports = Graph;
