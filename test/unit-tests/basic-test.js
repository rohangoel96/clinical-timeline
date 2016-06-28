var expect = require('chai').expect;

describe('clinicalTimeline', function() {
  it('should exist', function() {
   	var clinicalTimeline = require('../../js/clinicalTimeline.js');
    expect(clinicalTimeline).to.not.be.undefined;
  });
});