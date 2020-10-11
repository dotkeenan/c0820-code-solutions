/* global expect, reverseWords */

describe('reverseWords(string)', () => {

  beforeEach(() => {
    expect(reverseWords).to.be.a('function');
  });

  it('reverses the words in "What is unit testing?"', () => {
    const input = 'What is unit testing?';
    const output = reverseWords(input);
    expect(output).to.equal('tahW si tinu ?gnitset');
  });

  it('reverses the words in "follow your passion"', () => {
    const input = 'follow your passion';
    const output = reverseWords(input);
    expect(output).to.equal('wollof ruoy noissap');
  });

  it('reverses the words in "All Code All Day"', () => {
    const input = 'All Code All Day';
    const output = reverseWords(input);
    expect(output).to.equal('llA edoC llA yaD');
  });

  it('reverses the words in "Hello, how are you?"', () => {
    const input = 'Hello, how are you?';
    const output = reverseWords(input);
    expect(output).to.equal(',olleH woh era ?uoy');
  });

});
