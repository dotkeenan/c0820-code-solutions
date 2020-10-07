/* global expect, ransomCase */

describe('ransomCase(string)', () => {

  beforeEach(() => {
    expect(ransomCase).to.be.a('function');
  });

  it('returns "fOo" for "foo"', () => {
    const input = 'foo';
    const output = ransomCase(input);
    expect(output).to.equal('fOo');
  });

  it('returns "qUuX" for "QUUX"', () => {
    const input = 'QUUX';
    const output = ransomCase(input);
    expect(output).to.equal('qUuX');
  });

  it('returns "wAlDo" for "WaldO"', () => {
    const input = 'WaldO';
    const output = ransomCase(input);
    expect(output).to.equal('wAlDo');
  });

  it('returns "jAvAsCrIpT" for "JavaScript"', () => {
    const input = 'JavaScript';
    const output = ransomCase(input);
    expect(output).to.equal('jAvAsCrIpT');
  });

  it('returns "lEaRnInGfUzE" for "LearningFuze"', () => {
    const input = 'LearningFuze';
    const output = ransomCase(input);
    expect(output).to.equal('lEaRnInGfUzE');
  });

});
