var controllers = require('../controllers/index')();
var graph = require('./graph')
    //We dont even need the require d3/jquery I think.
var d3 = require('d3');
var $ = require('jquery');

$(function() {
    var time = 0.1;
    var app = app || {};
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
    app.canvas = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //X-axis
    app.canvas.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", height - 6)
        .text("time (s)");
    //Y-axis
    app.canvas.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("y", 6)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("amplitude (m)");

    // draw x axis
    app.canvas.append("g")
        .attr("transform", "translate(0, 215)")
        .call(xAxis);

    // draw y axis
    app.canvas.append("g")
        .call(yAxis);

    //Draw the lines below
    app.line1 = d3.svg.line()
        .x(function(d) {
            return x(d.time);
        })
        .y(function(d) {
            return y(d.wave1);
        });

    app.line2 = d3.svg.line()
        .x(function(d) {
            return x(d.time);
        })
        .y(function(d) {
            return y(d.wave2);
        });

    app.line3 = d3.svg.line()
        .x(function(d) {
            return x(d.time);
        })
        .y(function(d) {
            return y(d.wave3);
        });


    $("#generateGraphBtn").bind("click", function(e) {
        e.preventDefault();
        var formData = graph.getGraphData();
        var wave = controllers.waves6.Wave(formData)
        var json = wave.calculateGraph({
            time: 0.1
        });
        console.log(json);
        //Call the controllers function in here
        //Then pass the data to load graph

        graph.loadGraph(json, app)

    });

})