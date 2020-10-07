/* global omit, expect */

describe('omit(source, keys)', () => {

  beforeEach(() => {
    expect(omit).to.be.a('function');
  });

  it('creates an object without the listed keys', () => {
    const testCases = [
      [
        { foo: 1, bar: 2, baz: 3 },
        ['foo', 'baz'],
        { bar: 2 }
      ],
      [
        { qux: 4, corge: 5 },
        ['bar', 'grault'],
        { qux: 4, corge: 5 }
      ],
      [
        {},
        ['foo', 'bar', 'baz'],
        {}
      ]
    ];
    for (let i = 0; i < testCases.length; i++) {
      const [source, keys, expected] = testCases[i];
      const frozen = Object.freeze(source);
      const actual = omit(frozen, keys);
      expect(actual).to.deep.equal(expected);
    }
  });

});
