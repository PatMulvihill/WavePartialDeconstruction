exports = module.exports = {}
var d3 = require('d3');
var _ = require('underscore');

exports.getGraphData = function() {
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
    return formData;
}

exports.loadGraph = function(json, graphDiv) {
    var data = json;
    d3.selectAll("path.line").remove();
    //Actually draw the lines now
    graphDiv.canvas.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", graphDiv.line1)
        .attr("id", "line1")
        .attr("stroke-width", 1)
        .attr("stroke", "green");

    graphDiv.canvas.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", graphDiv.line2)
        .attr("stroke-width", 1)
        .attr("stroke", "blue");

    graphDiv.canvas.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", graphDiv.line3)
        .attr("stroke-width", 1)
        .attr("stroke", 'red');
}
