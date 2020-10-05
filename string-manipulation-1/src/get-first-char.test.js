/* global expect, getFirstChar */

describe('getFirstChar(string)', () => {

  beforeEach(() => {
    expect(getFirstChar).to.be.a('function');
  });

  it('returns "L" for "LearningFuze"', () => {
    const input = 'LearningFuze';
    const output = getFirstChar(input);
    expect(output).to.equal('L');
  });

  it('returns "p" for "paschal"', () => {
    const input = 'paschal';
    const output = getFirstChar(input);
    expect(output).to.equal('p');
  });

  it('returns "H" for "HTML"', () => {
    const input = 'HTML';
    const output = getFirstChar(input);
    expect(output).to.equal('H');
  });

  it('returns "c" for "code"', () => {
    const input = 'code';
    const output = getFirstChar(input);
    expect(output).to.equal('c');
  });

  it('returns "S" for "String"', () => {
    const input = 'String';
    const output = getFirstChar(input);
    expect(output).to.equal('S');
  });

});
