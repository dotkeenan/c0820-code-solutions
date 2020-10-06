/* global expect, capitalizeWords */

describe('capitalizeWords(string)', () => {

  beforeEach(() => {
    expect(capitalizeWords).to.be.a('function');
  });

  it('capitalizes the words in "needs solution"', () => {
    const input = 'needs solution';
    const output = capitalizeWords(input);
    expect(output).to.equal('Needs Solution');
  });

  it('capitalizes the words in "Add string manipulation practice."', () => {
    const input = 'Add string manipulation practice.';
    const output = capitalizeWords(input);
    expect(output).to.equal('Add String Manipulation Practice.');
  });

  it('capitalizes the words in "aLl CoDe aLl DaY', () => {
    const input = 'aLl CoDe aLl DaY';
    const output = capitalizeWords(input);
    expect(output).to.equal('All Code All Day');
  });

  it('capitalizes the words in "HTML, CSS, JavaScript, PHP, SQL"', () => {
    const input = 'HTML, CSS, JavaScript, PHP, SQL';
    const output = capitalizeWords(input);
    expect(output).to.equal('Html, Css, Javascript, Php, Sql');
  });

});
