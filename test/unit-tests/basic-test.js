var expect = require('chai').expect;

describe('clinicalTimeline', function() {
  it('should exist', function() {
   	var clinicalTimeline = require('../../js/clinicalTimeline.js');
    expect(clinicalTimeline).to.not.be.undefined;
  });
});

describe('clinicalTimeline.getTrack', function() {
    it('should return the track Status when requesting track Status', function() {
        var clinicalTimeline = require('../../js/clinicalTimeline.js');
        var data1 = require('../data/data1.json');
        expect("Status").to.equal(clinicalTimeline.__tests__.getTrack(data1, "Status").label);
    });
});


describe('clinicalTimeline.daysToTimeObject', function() {
    it('should ', function() {
     
    });
});

describe('clinicalTimeline.formatTime', function() {
    it('should ', function() {
     
    });
});

describe('clinicalTimeline.roundDown', function() {
    it('should ', function() {
     
    });
});

describe('clinicalTimeline.roundUp', function() {
    it('should ', function() {
     
    });
});