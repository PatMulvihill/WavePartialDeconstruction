/**
 * controllers/waves6.js
 */
exports = module.exports = {};
exports.Wave = function(opt) {
    //Create a wave object
    //Parse the options obj
    // this.a1 = opt.amp1;
    // this.a2 = opt.amp2;
    // this.f1 = opt.freq1;
    // this.f2 = opt.freq2;
    opt = opt || {};
    opt.amp1 = opt.amp1 || 3;
    opt.amp2 = opt.amp2 || 5;
    opt.freq1 = opt.freq1 || 4;
    opt.freq2 = opt.freq2 || 5;
    opt.interval = opt.interval || 0.02;
    this.data = opt;


    this.twopif1 = this.f1 * 2 * Math.PI;
    this.twopif2 = this.f2 * 2 * Math.PI;

    this.update = (opt) => {
        opt = opt || {};
        opt.amp1 = opt.amp1 || this.data.amp1;
        opt.amp2 = opt.amp2 || this.data.amp2;
        opt.freq1 = opt.freq1 || this.data.freq1;
        opt.freq2 = opt.freq2 || this.data.freq2;
        opt.interval = opt.interval || this.data.interval;
        this.data = opt;
    }
    
    this.calculateGraph = (time) => {
        this.data.interval = time || this.data.interval;
        
    }


    return this;

}
