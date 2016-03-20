/** @jsx React.DOM */
'use strict';

let React = require('react');
let ReactFauxDOM = require('react-faux-dom');
//var Wave = require('../../controllers/index.js')().waves6.Wave;
let d3 = require('d3');
class GraphSVG extends React.Component {

    constructor(props) {
        super();
        this.margin = {
            top: 20,
            right: 30,
            bottom: 40,
            left: 30
        };

        this.appendLines = this.appendLines.bind(this);

        this.width = 960 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;

        var x = d3.scale.linear()
            .nice()
            .domain([0, props.wave.data.time])
            .range([0, this.width]);

        var y = d3.scale.linear()
            .domain([15, -15])
            .range([0, this.height]);

        this.xAxis = d3.svg.axis()
            .ticks(10)
            .scale(x)
            .orient('bottom');

        this.yAxis = d3.svg.axis()
            .ticks(10)
            .scale(y)
            .orient('left');

        //This is the dom element we create with ReactFauxDom
        //It is what we eventually pass back to react to render
        this.svg = ReactFauxDOM.createElement('svg');
        //But we first do mutations on it with d3 and call it the
        //svg element.
        this.canvas = d3.select(this.svg)
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        // draw x axis
        this.canvas.append('g')
            .attr('transform', 'translate(0, 215)')
            .call(this.xAxis);
        // draw y axis
        this.canvas.append('g')
            .call(this.yAxis);

        this.line1 = d3.svg.line()
            .x(function(d) {
                return x(d.time);
            })
            .y(function(d) {
                return y(d.wave1);
            });

        this.line2 = d3.svg.line()
            .x(function(d) {
                return x(d.time);
            })
            .y(function(d) {
                return y(d.wave2);
            });

        this.line3 = d3.svg.line()
            .x(function(d) {
                return x(d.time);
            })
            .y(function(d) {
                return y(d.wave3);
            });
    }

    appendLines(data) {
        
        d3.selectAll('path.line').remove();

        this.canvas.append('path')
            .datum(data)
            .attr('class', 'line')
            .attr('d', this.line1)
            .attr('id', 'line1')
            .attr('stroke-width', 1)
            .attr('stroke', 'green');

        this.canvas.append('path')
            .datum(data)
            .attr('class', 'line')
            .attr('d', this.line2)
            .attr('stroke-width', 1)
            .attr('stroke', 'blue');

        this.canvas.append('path')
            .datum(data)
            .attr('class', 'line')
            .attr('d', this.line3)
            .attr('stroke-width', 1)
            .attr('stroke', 'red');

    }
    render() {
        this.appendLines(this.props.wave.calculateGraph({
            time: 0.1
        }));
        return this.svg.toReact();
    }
}

GraphSVG.propTypes = {
    wave: React.PropTypes.object
};

module.exports = GraphSVG;
