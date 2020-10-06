/* global expect, swapChars */

describe('swapChars(firstIndex, secondIndex, string)', () => {

  beforeEach(() => {
    expect(swapChars).to.be.a('function');
  });

  it('swaps the "l" and "o" in "lodash"', () => {
    const result = swapChars(0, 1, 'lodash');
    expect(result).to.equal('oldash');
  });

  it('swaps the "R" and "t" of "React"', () => {
    const result = swapChars(0, 4, 'React');
    expect(result).to.equal('teacR');
  });

  it('swaps the "t" and last "e" of "complete"', () => {
    const result = swapChars(6, 7, 'complete');
    expect(result).to.equal('compleet');
  });

  it('swaps the "L" and "F" of "LearningFuze"', () => {
    const result = swapChars(0, 8, 'LearningFuze');
    expect(result).to.equal('FearningLuze');
  });

  it('swaps the "J" and "R" in "HTML, CSS, JavaScript, React"', () => {
    const result = swapChars(11, 23, 'HTML, CSS, JavaScript, React');
    expect(result).to.equal('HTML, CSS, RavaScript, Jeact');
  });

});
