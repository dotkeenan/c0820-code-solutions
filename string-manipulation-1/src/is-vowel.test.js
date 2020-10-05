/* global expect, isVowel */

describe('isVowel(character)', () => {

  beforeEach(() => {
    expect(isVowel).to.be.a('function');
  });

  it('returns false for "L"', () => {
    const input = 'L';
    const output = isVowel(input);
    expect(output).to.equal(false);
  });

  it('returns false for "f"', () => {
    const input = 'f';
    const output = isVowel(input);
    expect(output).to.equal(false);
  });

  it('returns false for "Z"', () => {
    const input = 'Z';
    const output = isVowel(input);
    expect(output).to.equal(false);
  });

  it('returns true for "a"', () => {
    const input = 'a';
    const output = isVowel(input);
    expect(output).to.equal(true);
  });

  it('returns true for "E"', () => {
    const input = 'E';
    const output = isVowel(input);
    expect(output).to.equal(true);
  });

  it('returns true for "I"', () => {
    const input = 'I';
    const output = isVowel(input);
    expect(output).to.equal(true);
  });

  it('returns true for "o"', () => {
    const input = 'o';
    const output = isVowel(input);
    expect(output).to.equal(true);
  });

  it('returns true for "u"', () => {
    const input = 'u';
    const output = isVowel(input);
    expect(output).to.equal(true);
  });

});
