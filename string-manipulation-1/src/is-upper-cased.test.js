/* global expect, isUpperCased */

describe('isUpperCased(word)', () => {

  beforeEach(() => {
    expect(isUpperCased).to.be.a('function');
  });

  it('returns false for "LearningFuze"', () => {
    const input = 'LearningFuze';
    const output = isUpperCased(input);
    expect(output).to.equal(false);
  });

  it('returns false for "JavaScript"', () => {
    const input = 'JavaScript';
    const output = isUpperCased(input);
    expect(output).to.equal(false);
  });

  it('returns true for "HTML"', () => {
    const input = 'HTML';
    const output = isUpperCased(input);
    expect(output).to.equal(true);
  });

  it('returns false for "css"', () => {
    const input = 'css';
    const output = isUpperCased(input);
    expect(output).to.equal(false);
  });

  it('returns true for "PHP"', () => {
    const input = 'PHP';
    const output = isUpperCased(input);
    expect(output).to.equal(true);
  });

});
