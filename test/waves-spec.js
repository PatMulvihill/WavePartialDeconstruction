var expect = require('chai').expect;
var assert = require('assert');
var _ = require('underscore');

var cont = require('../controllers/index.js')()

describe('Controllers/Wave.js', () => {
    var Wave = cont.waves6.Wave;
    describe('Constructor', () => {
        it('Should take an options object, or default', () => {
            //Can't really test that were passing in an object
            var wave = new Wave({
                amp1: 3,
                amp2: 5,
                freq1: 4,
                freq2: 5,
                interval: 0.0002
            });
            expect(wave).to.have.any.keys('data');
            expect(wave.data).to.have.any.keys('amp1');
            expect(wave.data).to.have.any.keys('amp2');
            expect(wave.data).to.have.any.keys('freq1');
            expect(wave.data).to.have.any.keys('freq2');
            expect(wave.data).to.have.any.keys('interval');
            expect(wave.data).to.have.any.keys('time');
            expect(wave.data).to.have.any.keys('phi1');
            expect(wave.data).to.have.any.keys('phi2');
        })
        it('Should have sensible defaults', () => {
            var wave = new Wave();
            var sensibleDefaults = {
                amp1: 3,
                amp2: 5,
                freq1: 4,
                freq2: 5,
                interval: 0.0002,
                time: 0.02,
                phi1: 0,
                phi2: 0
            }
            expect(wave.data).to.deep.equal(sensibleDefaults);

            var wave2 = new Wave({
                amp1: 3,
                amp2: 5
            });
            expect(wave2.data).to.deep.equal(sensibleDefaults);

            var wave3 = new Wave({
                freq1: 4,
                freq2: 5
            });
            expect(wave3.data).to.deep.equal(sensibleDefaults);

            var wave4 = new Wave({
                freq1: 4,
                amp2: 5
            });
            expect(wave4.data).to.deep.equal(sensibleDefaults);
        })

    })

    describe('method: update(opt)', () => {
        it('Should have an update method', () => {
            var wave = new Wave();
            expect(wave.update).to.be.a('function');
        })

        it("Should update the waves data object", () => {

            var wave = new Wave();
            var updateData = {
                amp1: 10,
                amp2: 6,
                freq1: 7,
                freq2: 9,
                time: 0.01,
                phi1: 0,
                phi2: 0
            }
            wave.update(updateData);

            expect(wave.data).to.deep.equal(updateData);
        })

        it('Should leave untouched fields not specified in arg', () => {
            var wave = new Wave();
            var updateData = {
                amp1: 10,
                freq1: 7,
                interval: 0.05,
                phi2: 1
            }
            var afterUpdateData = {
                amp1: 10,
                amp2: 5,
                freq1: 7,
                freq2: 5,
                interval: 0.05,
                time: 0.02,
                phi1: 0,
                phi2: 1
            }
            wave.update(updateData);

            expect(wave.data).to.deep.equal(afterUpdateData);
        })

    })
    describe('method: calculateGraph(opt)', () => {
        it('Should have a calculateGraph method', () => {
            var wave = new Wave();
            expect(wave.calculateGraph).to.be.a('function');
        })
        it('Should throw err if not passed a time inside options', () => {
            var wave = new Wave();
            assert.throws(wave.calculateGraph, Error);
            try {
                wave.calculateGraph({});
            }
            catch (err) {
                expect(err.message).to.equal('Not passed a time length to calculate graph for. Exiting.')
            }
        })

        it('Should throw an err if interval < 0 after update', () => {
            var wave = new Wave();
            assert.throws(wave.calculateGraph, Error);
            try {
                wave.calculateGraph({
                    time: 0.02,
                    interval: -5
                });
            }
            catch (err) {
                expect(err.message).to.equal('Interval in calculateGraph must be non-negative. Exiting.')
            }
        })

        it('Should update an interval data members if passed into options', () => {
            var wave = new Wave();
            wave.calculateGraph({
                time: 0.02,
                interval: 0.04
            });
            expect(wave.data).to.have.any.keys('interval');
            expect(wave.data.interval).to.equal(0.04);

        })

        it('Should leave interval untouched if not passed', () => {
            var wave = new Wave({
                interval: 0.08
            });
            wave.calculateGraph({
                time: 0.02
            })
            expect(wave.data.interval).to.equal(0.08);

        })

        it('Should return an array', () => {
            var wave = new Wave();
            var ret = wave.calculateGraph({
                time: 0.02
            });
            expect(ret).to.be.an('array');
        })

        it('Should return an empty array if time < interval', () => {
            var wave = new Wave();
            var ret = wave.calculateGraph({
                time: 0.02,
                interval: 0.03
            });
            expect(ret.length).to.be.equal(0);
        })

        it('Should return an array of length time/interval otherwise', () => {
            var wave = new Wave();
            var ret = wave.calculateGraph({
                time: 0.03,
                interval: 0.0002
            });
            expect(ret.length).to.be.equal(151);
            ret = wave.calculateGraph({
                time: 0.01,
                interval: 0.0002
            });
            expect(ret.length).to.be.equal(50);
            ret = wave.calculateGraph({
                time: 1,
                interval: 0.0002
            });
            expect(ret.length).to.be.equal(5001);
        })

        it('Should return an array of points, that have y1, y2, y3, and time data members', () => {
            var wave = new Wave();
            var ret = wave.calculateGraph({
                time: 0.03,
                interval: 0.0002
            });
            _.each(ret, (obj) => {
                expect(obj).to.have.any.keys('wave1');
                expect(obj).to.have.any.keys('wave2');
                expect(obj).to.have.any.keys('wave2');
                expect(obj).to.have.any.keys('time');
            })
        })

    })


})