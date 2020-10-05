/* global expect, getWords */

describe('getWords(string)', () => {

  beforeEach(() => {
    expect(getWords).to.be.a('function');
  });

  it('returns an Array of one word', () => {
    const input = 'LearningFuze';
    const output = getWords(input);
    expect(output).to.deep.equal([
      'LearningFuze'
    ]);
  });

  it('returns an Array of two words', () => {
    const input = 'Web Development';
    const output = getWords(input);
    expect(output).to.deep.equal([
      'Web',
      'Development'
    ]);
  });

  it('returns an Array of three words', () => {
    const input = 'Cascading Style Sheets';
    const output = getWords(input);
    expect(output).to.deep.equal([
      'Cascading',
      'Style',
      'Sheets'
    ]);
  });

  it('returns an Array of four words', () => {
    const input = 'European Computer Manufacturers Association';
    const output = getWords(input);
    expect(output).to.deep.equal([
      'European',
      'Computer',
      'Manufacturers',
      'Association'
    ]);
  });

  it('returns no words', () => {
    const input = '';
    const output = getWords(input);
    expect(output).to.deep.equal([]);
  });

});
