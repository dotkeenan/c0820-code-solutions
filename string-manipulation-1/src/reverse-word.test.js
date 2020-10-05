/* global expect, reverseWord */

describe('reverseWord(word)', () => {

  beforeEach(() => {
    expect(reverseWord).to.be.a('function');
  });

  it('returns "oof" for "foo"', () => {
    const input = 'foo';
    const output = reverseWord(input);
    expect(output).to.equal('oof');
  });

  it('returns "bar" for "rab"', () => {
    const input = 'rab';
    const output = reverseWord(input);
    expect(output).to.equal('bar');
  });

  it('returns "ezuFgninraeL" for "LearningFuze"', () => {
    const input = 'LearningFuze';
    const output = reverseWord(input);
    expect(output).to.equal('ezuFgninraeL');
  });

  it('returns "JavaScript" for "tpircSavaJ"', () => {
    const input = 'tpircSavaJ';
    const output = reverseWord(input);
    expect(output).to.equal('JavaScript');
  });

  it('returns "racecar" for "racecar"', () => {
    const input = 'racecar';
    const output = reverseWord(input);
    expect(output).to.equal('racecar');
  });

});
