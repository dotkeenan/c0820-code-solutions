/* global pick, expect */

describe('pick(source, keys)', () => {

  beforeEach(() => {
    expect(pick).to.be.a('function');
  });

  it('creates an object with only the listed keys', () => {
    const testCases = [
      [
        { foo: 1, bar: 2, baz: 3 },
        ['foo', 'baz'],
        { foo: 1, baz: 3 }
      ],
      [
        { qux: 4, corge: 5 },
        ['bar', 'grault'],
        {}
      ],
      [
        { bar: 2 },
        ['foo', 'bar', 'baz'],
        { bar: 2 }
      ],
      [
        { foo: null, bar: 0, baz: undefined },
        ['foo', 'bar', 'baz'],
        { foo: null, bar: 0 }
      ]
    ];
    for (let i = 0; i < testCases.length; i++) {
      const [source, keys, expected] = testCases[i];
      const frozen = Object.freeze(source);
      const actual = pick(frozen, keys);
      expect(actual).to.deep.equal(expected);
    }
  });

});
