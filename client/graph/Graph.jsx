/** @jsx React.DOM */
'use strict';

let InputForm = require('./InputForm');
let React = require('react');

class Graph extends React.Component{

  render() {
    var fields = [
      {
        key: 'amp1',
        name: 'Amplitude 1'
      },
      {
        key: 'freq1',
        name: 'Frequency 1'
      },
      {
        key: 'amp2',
        name: 'Amplitude 2'
      },
      {
        key: 'freq2',
        name: 'Frequency 2'
      }
    ];

    return (
      <InputForm fields={fields} />
    );
  }
}

module.exports = Graph;
