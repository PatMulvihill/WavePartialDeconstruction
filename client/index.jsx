/** @jsx React.DOM */
'use strict';
let React = require('react');
let reactDOM = require('react-dom');

var Graph = require('./graph/Graph');

//Render our top level component here
reactDOM.render(
  <Graph />,
  document.getElementById('content')
);
