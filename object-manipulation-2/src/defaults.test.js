/* global defaults, expect */

describe('defaults(target, source)', () => {

  beforeEach(() => {
    expect(defaults).to.be.a('function');
  });

  it('copies all properties onto an empty target', () => {
    const target = {};
    const source = {
      foo: 1,
      bar: 2,
      baz: 3
    };
    defaults(target, source);
    expect(target).to.deep.equal(source);
  });

  it('copies all missing properties onto a target', () => {
    const target = {
      foo: 1,
      baz: 3
    };
    const source = {
      bar: 2
    };
    defaults(target, source);
    expect(target).to.deep.equal({
      foo: 1,
      bar: 2,
      baz: 3
    });
  });

  it('does not overwrite existing properties of a target', () => {
    const target = {
      foo: 1,
      bar: null,
      baz: 3
    };
    const source = {
      foo: 4,
      bar: 2,
      baz: 5,
      qux: false
    };
    defaults(target, source);
    expect(target).to.deep.equal({
      foo: 1,
      bar: null,
      baz: 3,
      qux: false
    });
  });

  it('copies no properties from an empty source', () => {
    const target = {
      foo: 1,
      baz: 3
    };
    const source = {};
    defaults(target, source);
    expect(target).to.deep.equal({
      foo: 1,
      baz: 3
    });
  });

});
