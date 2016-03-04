var expect = require('chai').expect;
var assert = require('assert');

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
                interval: 0.02
            });
            expect(wave).to.have.any.keys('data');
            expect(wave.data).to.have.any.keys('amp1');
            expect(wave.data).to.have.any.keys('amp2');
            expect(wave.data).to.have.any.keys('freq1');
            expect(wave.data).to.have.any.keys('freq2');
            expect(wave.data).to.have.any.keys('interval');
        })
        it('Should have sensible defaults', () => {
            var wave = new Wave();
            var sensibleDefaults = {
                amp1: 3,
                amp2: 5,
                freq1: 4,
                freq2: 5,
                interval: 0.02
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
    
    describe('function: update(opt)', () =>{
        it('Should have an update member function', () => {
            var wave = new Wave();
            expect(wave.update).to.be.a('function');
        })
        
        it("Should update the waves data object", () => {
            
            var wave = new Wave();
            var updateData = {
                amp1: 10,
                amp2: 6,
                freq1: 7,
                freq2: 9
            }
            wave.update(updateData);
            
            expect(wave.data).to.deep.equal(updateData);
        })
        
        it('Should leave untouched fields not specified in arg', () => {
            var wave = new Wave();
            var updateData = {
                amp1: 10,
                freq1: 7,
                interval: 0.05
            }
            var afterUpdateData = {
                amp1: 10,
                amp2: 5,
                freq1: 7,
                freq2: 5,
                interval: 0.05
            }
            wave.update(updateData);
            
            expect(wave.data).to.deep.equal(afterUpdateData);
        })
        
    })
    describe('function: calculateGraph(opt)', () =>{
        it('Should have a calculateGraph member function', () => {
            var wave = new Wave();
            expect(wave.calculateGraph).to.be.a('function');
        })
        
        it('Should update an interval data member', () => {
            var wave = new Wave();
            wave.calculateGraph(0.04);
            expect(wave.data).to.have.any.keys('interval');
            expect(wave.data.interval).to.equal(0.04);

        })
        
    })


})