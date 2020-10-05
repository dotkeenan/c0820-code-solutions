/* global expect, getLastChar */

describe('getLastChar(string)', () => {

  beforeEach(() => {
    expect(getLastChar).to.be.a('function');
  });

  it('returns "e" for "LearningFuze"', () => {
    const input = 'LearningFuze';
    const output = getLastChar(input);
    expect(output).to.equal('e');
  });

  it('returns "l" for "paschal"', () => {
    const input = 'paschal';
    const output = getLastChar(input);
    expect(output).to.equal('l');
  });

  it('returns "L" for "HTML"', () => {
    const input = 'HTML';
    const output = getLastChar(input);
    expect(output).to.equal('L');
  });

  it('returns "e" for "code"', () => {
    const input = 'code';
    const output = getLastChar(input);
    expect(output).to.equal('e');
  });

  it('returns "g" for "String"', () => {
    const input = 'String';
    const output = getLastChar(input);
    expect(output).to.equal('g');
  });

});
