/* global expect, capitalizeWord */

describe('capitalizeWord(word)', () => {

  beforeEach(() => {
    expect(capitalizeWord).to.be.a('function');
  });

  it('capitalizes "foo"', () => {
    const input = 'foo';
    const output = capitalizeWord(input);
    expect(output).to.equal('Foo');
  });

  it('capitalizes "BAR"', () => {
    const input = 'BAR';
    const output = capitalizeWord(input);
    expect(output).to.equal('Bar');
  });

  it('capitalizes "bAZ"', () => {
    const input = 'bAZ';
    const output = capitalizeWord(input);
    expect(output).to.equal('Baz');
  });

  it('capitalizes "qUx"', () => {
    const input = 'qUx';
    const output = capitalizeWord(input);
    expect(output).to.equal('Qux');
  });

  it('capitalizes "jaVAsCrIPt"', () => {
    const input = 'jaVAsCrIPt';
    const output = capitalizeWord(input);
    expect(output).to.equal('JavaScript');
  });

  it('capitalizes "javaScript"', () => {
    const input = 'javaScript';
    const output = capitalizeWord(input);
    expect(output).to.equal('JavaScript');
  });

  it('capitalizes "JavascRipt"', () => {
    const input = 'JavascRipt';
    const output = capitalizeWord(input);
    expect(output).to.equal('JavaScript');
  });

});
