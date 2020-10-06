/* global expect, getKeys */

describe('getKeys(object)', () => {

  beforeEach(() => {
    expect(getKeys).to.be.a('function');
  });

  it('returns Dave\'s property keys', () => {
    const dave = {
      firstName: 'David',
      lastName: 'Thomas'
    };
    const output = getKeys(dave);
    expect(output)
      .to.be.an('array')
      .with.length(2)
      .that.includes('firstName')
      .and.includes('lastName');
  });

  it('returns LearningFuze\'s property keys', () => {
    const learningFuze = {
      latitude: 33.6349,
      attitude: 'sanguine',
      longitude: 117.7405
    };
    const output = getKeys(learningFuze);
    expect(output)
      .to.be.an('array')
      .with.length(3)
      .that.includes('latitude')
      .that.includes('attitude')
      .and.includes('longitude');
  });

  it('returns Tim\'s property keys', () => {
    const tim = {};
    const output = getKeys(tim);
    expect(output).to.deep.equal([]);
  });

});
