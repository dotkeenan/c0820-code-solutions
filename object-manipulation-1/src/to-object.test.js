/* global expect, toObject */

describe('toObject(keyValuePair)', () => {

  beforeEach(() => {
    expect(toObject).to.be.a('function');
  });

  it('creates a Dave object', () => {
    const output = toObject(['firstName', 'David']);
    expect(output).to.deep.equal({
      firstName: 'David'
    });
  });

  it('creates a cool object', () => {
    const output = toObject(['isCool', true]);
    expect(output).to.deep.equal({
      isCool: true
    });
  });

  it('creates an employee object', () => {
    const output = toObject(['employer', 'LearningFuze']);
    expect(output).to.deep.equal({
      employer: 'LearningFuze'
    });
  });

});
