/* global expect, capitalize */

describe('capitalize(word)', () => {

  beforeEach(() => {
    expect(capitalize).to.be.a('function');
  });

  it('returns "A" for "a"', () => {
    const input = 'a';
    const output = capitalize(input);
    expect(output).to.equal('A');
  });

  it('returns "Link" for "link"', () => {
    const input = 'link';
    const output = capitalize(input);
    expect(output).to.equal('Link');
  });

  it('returns "To" for "tO"', () => {
    const input = 'tO';
    const output = capitalize(input);
    expect(output).to.equal('To');
  });

  it('returns "The" for "ThE"', () => {
    const input = 'ThE';
    const output = capitalize(input);
    expect(output).to.equal('The');
  });

  it('returns "Past" for "pAsT"', () => {
    const input = 'pAsT';
    const output = capitalize(input);
    expect(output).to.equal('Past');
  });

});
