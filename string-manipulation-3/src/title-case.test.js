/* global expect, titleCase */

describe('titleCase(string)', () => {

  beforeEach(() => {
    expect(titleCase).to.be.a('function');
  });

  it('title cases "composing software"', () => {
    const input = 'composing software';
    const output = titleCase(input);
    expect(output).to.equal('Composing Software');
  });

  it('title cases "high performance browser networking"', () => {
    const input = 'high performance browser networking';
    const output = titleCase(input);
    expect(output).to.equal('High Performance Browser Networking');
  });

  it('title cases "node.js in action"', () => {
    const input = 'node.js in action';
    const output = titleCase(input);
    expect(output).to.equal('Node.js in Action');
  });

  it('title cases "professional JavaScript for web developers', () => {
    const input = 'professional JavaScript for web developers';
    const output = titleCase(input);
    expect(output).to.equal('Professional JavaScript for Web Developers');
  });

  it('title cases "secrets of the javascript ninja"', () => {
    const input = 'secrets of the javascript ninja';
    const output = titleCase(input);
    expect(output).to.equal('Secrets of the JavaScript Ninja');
  });

  it('title cases "web audio api"', () => {
    const input = 'web audio api';
    const output = titleCase(input);
    expect(output).to.equal('Web Audio API');
  });

  it('title cases "javascript: the definitive guide"', () => {
    const input = 'javascript: the definitive guide';
    const output = titleCase(input);
    expect(output).to.equal('JavaScript: The Definitive Guide');
  });

  it('title cases "speaking Javascript: an in-depth guide for programmers"', () => {
    const input = 'speaking Javascript: an in-depth guide for programmers';
    const output = titleCase(input);
    expect(output).to.equal('Speaking JavaScript: An In-Depth Guide for Programmers');
  });

});
