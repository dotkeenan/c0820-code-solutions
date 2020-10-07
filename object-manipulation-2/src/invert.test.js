/* global invert, expect */

describe('invert(source)', () => {

  beforeEach(() => {
    expect(invert).to.be.a('function');
  });

  it('inverts a person object', () => {
    const person = {
      age: NaN,
      occupation: 'programmer',
      language: 'JavaScript'
    };
    const inverted = invert(person);
    expect(inverted).to.deep.equal({
      NaN: 'age',
      programmer: 'occupation',
      JavaScript: 'language'
    });
  });

  it('inverts a transaction object', () => {
    const transaction = {
      accountId: 'axbxcx',
      amount: 1000,
      type: 'withdrawal'
    };
    const inverted = invert(transaction);
    expect(inverted).to.deep.equal({
      axbxcx: 'accountId',
      1000: 'amount',
      withdrawal: 'type'
    });
  });

  it('inverts a pet object', () => {
    const pet = {
      name: 'ada',
      type: 'cat',
      breed: 'bengal',
      age: 1.5
    };
    const inverted = invert(pet);
    expect(inverted).to.deep.equal({
      ada: 'name',
      cat: 'type',
      bengal: 'breed',
      1.5: 'age'
    });
  });

  it('does nothing with an empty object', () => {
    const empty = {};
    const inverted = invert(empty);
    expect(inverted).to.deep.equal({});
  });

});
