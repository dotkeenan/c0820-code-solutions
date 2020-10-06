/* global expect, firstChars */

describe('firstChars(length, string)', () => {

  beforeEach(() => {
    expect(firstChars).to.be.a('function');
  });

  it('returns the first 8 characters of "All Code All Day"', () => {
    const result = firstChars(8, 'All Code All Day');
    expect(result).to.equal('All Code');
  });

  it('returns the first 15 characters of "HTML, CSS, JavaScript, React"', () => {
    const result = firstChars(15, 'HTML, CSS, JavaScript, React');
    expect(result).to.equal('HTML, CSS, Java');
  });

  it('returns the first character of "React"', () => {
    const result = firstChars(1, 'React');
    expect(result).to.equal('R');
  });

  it('returns the first 3 characters of "Angular"', () => {
    const result = firstChars(3, 'Angular');
    expect(result).to.equal('Ang');
  });

  it('returns the first 5 characters of ""', () => {
    const result = firstChars(5, '');
    expect(result).to.equal('');
  });

  it('returns the first 20 characters of "LearningFuze"', () => {
    const result = firstChars(20, 'LearningFuze');
    expect(result).to.equal('LearningFuze');
  });

});
