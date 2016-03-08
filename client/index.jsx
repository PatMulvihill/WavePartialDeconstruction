/** @jsx React.DOM */
'use strict';
var React = require('react');
var reactDOM = require('react-dom');

var Graph = require('./graph/Graph');
reactDOM.render(
  <Graph />,
  document.getElementById('content')
);
