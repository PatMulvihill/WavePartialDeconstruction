/**
 * controllers/waves6.js
 */
exports = module.exports = {};
exports.Wave = function(opt) {
    //Create a wave object, and
    //parse the options obj
    opt = opt || {};
    opt.amp1 = opt.amp1 || 3;
    opt.amp2 = opt.amp2 || 5;
    opt.freq1 = opt.freq1 || 4;
    opt.freq2 = opt.freq2 || 5;
    opt.interval = opt.interval || 0.0002;
    opt.time = opt.time || 0.02
        //Save options
    this.data = opt;

    //These two are not being passed in options currently
    this.data.phi1 = this.data.phi2 = 0;

    this.update = (opt) => {
        opt = opt || {};
        opt.amp1 = opt.amp1 || this.data.amp1;
        opt.amp2 = opt.amp2 || this.data.amp2;
        opt.freq1 = opt.freq1 || this.data.freq1;
        opt.freq2 = opt.freq2 || this.data.freq2;
        opt.interval = opt.interval || this.data.interval;
        opt.time = opt.time || this.data.time;
        opt.phi1 = opt.phi1 || this.data.phi1;
        opt.phi2 = opt.phi2 || this.data.phi2;
        this.data = opt;
    }

    this.calculateGraph = (opt) => {
        opt = opt || {};
        if (!opt.time) {
            throw Error('Not passed a time length to calculate graph for. Exiting.');
        }

        this.data.time = opt.time || this.data.time;
        this.data.interval = opt.interval || this.data.interval;
        if(this.data.interval < 0){
            throw RangeError('Interval in calculateGraph must be non-negative. Exiting.');
        }
        
        if(this.data.time < this.data.interval){
            return [];
        }
        //Calculate the new array here
        var waveData = [];
        for (var i = 0; i < this.data.time; i += this.data.interval) {
            var point = {};
            // calculates y1
            point.wave1 = this.data.amp1 * Math.cos((this.data.freq1 * 2 * Math.PI) * i + this.data.phi1);
            // calculates y2
            point.wave2 = this.data.amp2 * Math.cos((this.data.freq2 * 2 * Math.PI) * i + this.data.phi2);

            // calcualtes y3
            // this is the partially deconstructed wave
            point.wave3 = point.wave1 + point.wave2;
            point.time = i;
            waveData.push(point);
        }
        
        return waveData;
    }


    return this;

}
