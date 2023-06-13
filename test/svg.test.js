// Constructor Arithmetic is imported.
const SVG = require('../lib/svg.js');
// A testing suite is created.
describe('SVG', () => {
  // test is created to check the text length
  describe('text should not be longer than 3 characters', () => {
    it('text cannot be greater than 3 characters', () => {
      const text = 'GNTA';
      const textColor = 'blue'
      const svg = new SVG();
      const err = new TypeError("UNKNOWN ERROR");
      expect(() => { svg.setText(text, textColor) }).toThrow("UNKNOWN ERROR");
    });
    // test is created to check the text content
    describe('throw an error if there is no character', () => {
      it('text cannot be blank', () => {
        const text = '';
        const textColor = 'blue'
        const svg = new SVG();
        const err = new TypeError("UNKNOWN ERROR");
        expect(() => { svg.setText(text, textColor) }).toThrow("UNKNOWN ERROR");
      });
    });
  });
});
