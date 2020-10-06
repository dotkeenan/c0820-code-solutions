/* global expect, numVowels */

describe('numVowels(string)', () => {

  beforeEach(() => {
    expect(numVowels).to.be.a('function');
  });

  it('returns 5 for "All Code All Day"', () => {
    const input = 'All Code All Day';
    const output = numVowels(input);
    expect(output).to.equal(5);
  });

  it('returns 5 for "HTML, CSS, JavaScript, React"', () => {
    const input = 'HTML, CSS, JavaScript, React';
    const output = numVowels(input);
    expect(output).to.equal(5);
  });

  it('returns 2 for "React"', () => {
    const input = 'React';
    const output = numVowels(input);
    expect(output).to.equal(2);
  });

  it('returns 3 for "Angular"', () => {
    const input = 'Angular';
    const output = numVowels(input);
    expect(output).to.equal(3);
  });

  it('returns 0 for ""', () => {
    const input = '';
    const output = numVowels(input);
    expect(output).to.equal(0);
  });

  it('returns 5 for "LearningFuze"', () => {
    const input = 'LearningFuze';
    const output = numVowels(input);
    expect(output).to.equal(5);
  });

});
