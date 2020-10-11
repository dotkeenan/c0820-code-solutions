/* global expect, isPalindromic */

describe('isPalindromic(string)', () => {

  beforeEach(() => {
    expect(isPalindromic).to.be.a('function');
  });

  it('returns true for "bob"', () => {
    const input = 'bob';
    const output = isPalindromic(input);
    expect(output).to.equal(true);
  });

  it('returns false for "alice"', () => {
    const input = 'alice';
    const output = isPalindromic(input);
    expect(output).to.equal(false);
  });

  it('returns true for "racecar"', () => {
    const input = 'racecar';
    const output = isPalindromic(input);
    expect(output).to.equal(true);
  });

  it('returns false for "rasecar"', () => {
    const input = 'rasecar';
    const output = isPalindromic(input);
    expect(output).to.equal(false);
  });

  it('returns true for "taco cat"', () => {
    const input = 'taco cat';
    const output = isPalindromic(input);
    expect(output).to.equal(true);
  });

  it('returns false for "sam i am"', () => {
    const input = 'sam i am';
    const output = isPalindromic(input);
    expect(output).to.equal(false);
  });

});
