/* global expect, banMethods, includes */

describe('includes(array, value)', () => {

  beforeEach(() => {
    expect(includes).to.be.a('function');
    banMethods(includes, 'includes');
  });

  it('finds "baz" in ["foo", "bar", "baz", "qux"]', () => {
    const array = ['foo', 'bar', 'baz', 'qux'];
    const output = includes(array, 'baz');
    expect(output).to.equal(true);
  });

  it('does not find "corge" in ["foo", "bar", "baz", "qux"]', () => {
    const array = ['foo', 'bar', 'baz', 'qux'];
    const output = includes(array, 'corge');
    expect(output).to.equal(false);
  });

  it('finds 2 in [1, 2, 3, 4, 5]', () => {
    const array = [1, 2, 3, 4, 5];
    const output = includes(array, 2);
    expect(output).to.equal(true);
  });

  it('does not find 7 in [1, 2, 3, 4, 5]', () => {
    const array = [1, 2, 3, 4, 5];
    const output = includes(array, 7);
    expect(output).to.equal(false);
  });

  it('finds false in [false, true, false, true]', () => {
    const array = [false, true, false, true];
    const output = includes(array, false);
    expect(output).to.equal(true);
  });

  it('does not find null in [false, true, false, true]', () => {
    const array = [false, true, false, true];
    const output = includes(array, null);
    expect(output).to.equal(false);
  });

  it('does not find anything in [] (empty array)', () => {
    const array = [];
    expect(includes(array, true)).to.equal(false);
    expect(includes(array, 'foo')).to.equal(false);
    expect(includes(array, 7)).to.equal(false);
  });

});
