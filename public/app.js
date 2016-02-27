/* global d3, $, _ */
var app = app || {};




function getGraphData() {

    var formData = {
        amp1: Number($('#amplitudeInput1').val()),
        freq1: Number($('#frequencyInput1').val()),
        phi1: 0,
        amp2: Number($('#amplitudeInput2').val()),
        freq2: Number($('#frequencyInput2').val()),
        phi2: 0
    }

    var shouldExit = false;
    _.mapObject(formData, function(val, key) {
        if (_.isNaN(val)) {
            console.log(key + " has an invalid value.");
            shouldExit = true;
        }
    })
    if (shouldExit) {
        return;
    }

    $.ajax({
        type: "POST",
        url: 'api/graph',
        data: formData,
        success: loadGraph,
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error, status = " + textStatus + ", " +
                "error thrown: " + errorThrown
            );
        },
        dataType: 'json',
        //contentType: 'application/json',
    });

    // $.ajax({
    //     type: 'GET',
    //     url: 'api/graph/' + amplitude,
    //     dataType: 'json',
    //     async: true,
    //     success: loadGraph
    // });

}


function loadGraph(json) {
    console.log(json);
    var data = json;
    d3.selectAll("path.line").remove();
    //Actually draw the lines now
    app.canvas.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", app.line1)
        .attr("id", "line1")
        .attr("stroke-width", 1)
        .attr("stroke", "green");

    app.canvas.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", app.line2)
        .attr("stroke-width", 1)
        .attr("stroke", "blue");

    app.canvas.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", app.line3)
        .attr("stroke-width", 1)
        .attr("stroke", 'red');

    // var legend = app.canvas.append("g")
    //     .attr("class", "legend")
    //     .attr("transform", "translate(50,30)")
    //     .style("font-size", "12px")
    //     .call(d3.legend);
    // http://bl.ocks.org/ZJONSSON/3918369


}


$(function() {

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
})
