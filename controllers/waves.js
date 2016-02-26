exports = module.exports = {};


exports.createGraphData = function(amplitude){

    var a1 = amplitude;
    var a2 = amplitude;

    var phi1 = 0;
    var phi2 = 0;

    var f1 = 100;
    var f2 = 75;

    var y1;
    var y2;
    var y3;

    var twopif1 = f1 * 2 * Math.PI;
    var twopif2 = f2 * 2 * Math.PI;

    var time = 0.1;


    var i = 0;
    var data = [];
    for (i = 0; i < time; i += 0.0002) {
        // calculates y1
        y1 = a1 * Math.cos(twopif1 * i + phi1);
        //wave1.push(y1, i);

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
