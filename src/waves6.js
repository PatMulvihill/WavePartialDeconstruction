"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * controllers/waves6.js
 */

var Wave = function () {

    //Create a wave object

    function Wave(opt) {
        _classCallCheck(this, Wave);

        //Parse the options obj
        this.a1 = opt.amp1;
        this.a2 = opt.amp2;
        this.f1 = opt.freq1;
        this.f2 = opt.freq2;
        this.phi1 = opt.phi1;
        this.phi2 = opt.phi2;

        this.twopif1 = this.f1 * 2 * Math.PI;
        this.twopif2 = this.f2 * 2 * Math.PI;
    }

    _createClass(Wave, [{
        key: "update",
        value: function update(opt) {
            this.a1 = opt.amp1;
            this.a2 = opt.amp2;

            this.f1 = opt.freq1;
            this.f2 = opt.freq2;

            this.phi1 = opt.phi1;
            this.phi2 = opt.phi2;
        }
    }]);

    return Wave;
}();

exports.default = Wave;