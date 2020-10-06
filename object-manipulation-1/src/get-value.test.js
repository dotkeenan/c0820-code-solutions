/* global expect, getValue */

describe('getValue(object, key)', () => {

  beforeEach(() => {
    expect(getValue).to.be.a('function');
  });

  it('returns the value of Dave\'s "firstName" property', () => {
    const dave = {
      firstName: 'David',
      lastName: 'Thomas'
    };
    const output = getValue(dave, 'firstName');
    expect(output).to.equal('David');
  });

  it('returns the value of Dave\'s "lastName" property', () => {
    const dave = {
      firstName: 'David',
      lastName: 'Thomas'
    };
    const output = getValue(dave, 'lastName');
    expect(output).to.equal('Thomas');
  });

  it('returns the "latitude" of LearningFuze', () => {
    const learningFuze = {
      latitude: 33.6349,
      longitude: 117.7405
    };
    const output = getValue(learningFuze, 'latitude');
    expect(output).to.equal(33.6349);
  });

  it('returns the "longitude" of LearningFuze', () => {
    const learningFuze = {
      latitude: 33.6349,
      longitude: 117.7405
    };
    const output = getValue(learningFuze, 'longitude');
    expect(output).to.equal(117.7405);
  });

  it('returns undefined for non-existent property keys', () => {
    const tim = {
      name: 'Tim',
      language: 'JavaScript'
    };
    const output = getValue(tim, 'yearsExperience');
    expect(output).to.equal(undefined);
  });

});
