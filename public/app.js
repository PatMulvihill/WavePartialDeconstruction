/* global d3 *


/**
 * Begin graph output code
 **/
var time = 0.1;

var margin = {
        top: 20,
        right: 30,
        bottom: 40,
        left: 30
    },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .nice()
    .domain([0, time])
    .range([0, width]);

var y = d3.scale.linear()
    .domain([15, -15])
    .range([0, height]);

var xAxis = d3.svg.axis()
    .ticks(10)
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .ticks(10)
    .scale(y)
    .orient("left");

//Div for graph
var canvas = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//X-axis
canvas.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height - 6)
    .text("time (s)");
//Y-axis
canvas.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("amplitude (m)");

// draw x axis
canvas.append("g")
    .attr("transform", "translate(0, 215)")
    .call(xAxis);

// draw y axis
canvas.append("g")
    .call(yAxis);

//Draw the lines below
var line1 = d3.svg.line()
    .x(function(d) {
        return x(d.time);
    })
    .y(function(d) {
        return y(d.wave1);
    });

var line2 = d3.svg.line()
    .x(function(d) {
        return x(d.time);
    })
    .y(function(d) {
        return y(d.wave2);
    });

var line3 = d3.svg.line()
    .x(function(d) {
        return x(d.time);
    })
    .y(function(d) {
        return y(d.wave3);
    });



var data; // a global


// $.getJSON("/api/graph", function(data) {
    
//     console.log(data);
    
    
// });

d3.json("data.json", function(error, json) {
    if (error) return console.log(error);
    data = json;

    //Actually draw the lines now
    canvas.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line1)
        .attr("stroke-width", 1)
        .attr("stroke", "green");
        
    canvas.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line2)
        .attr("stroke-width", 1)
        .attr("stroke", "blue");

    canvas.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line3)
        .attr("stroke-width", 1)
        .attr("stroke", 'red');

});