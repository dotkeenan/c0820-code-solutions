/* global expect, isLowerCased */

describe('isLowerCased(word)', () => {

  beforeEach(() => {
    expect(isLowerCased).to.be.a('function');
  });

  it('returns false for "LearningFuze"', () => {
    const input = 'LearningFuze';
    const output = isLowerCased(input);
    expect(output).to.equal(false);
  });

  it('returns true for "zip-ties"', () => {
    const input = 'zip-ties';
    const output = isLowerCased(input);
    expect(output).to.equal(true);
  });

  it('returns false for "JavaScript"', () => {
    const input = 'JavaScript';
    const output = isLowerCased(input);
    expect(output).to.equal(false);
  });

  it('returns true for "burgers"', () => {
    const input = 'burgers';
    const output = isLowerCased(input);
    expect(output).to.equal(true);
  });

  it('returns false for "HTML"', () => {
    const input = 'HTML';
    const output = isLowerCased(input);
    expect(output).to.equal(false);
  });

});
