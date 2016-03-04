exports = module.exports = {};


exports.createGraphData = function(d) {
    //console.log(d);
    var a1 = d.amp1;
    var a2 = d.amp2;

    var f1 = d.freq1;
    var f2 = d.freq2;

    var phi1 = d.phi1;
    var phi2 = d.phi2;

    var twopif1 = f1 * 2 * Math.PI;
    var twopif2 = f2 * 2 * Math.PI;
    
    var y1;
    var y2;
    var y3;
    var time = 0.1;


    var i = 0;
    var data = [];
    for (i = 0; i < time; i += 0.0002) {
        // calculates y1
        y1 = a1 * Math.cos(twopif1 * i + phi1);
        // calculates y2
        y2 = a2 * Math.cos(twopif2 * i + phi2);

        // calcualtes y3
        // this is the partially deconstructed wave
        y3 = y1 + y2;


        //Insert all values into a JS object and push
        data.push({
            'wave1': y1,
            'wave2': y2,
            'wave3': y3,
            'time': i
        });

    }

    return data;
}
