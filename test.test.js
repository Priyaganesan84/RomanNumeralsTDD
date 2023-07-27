const convertToRoman = require('./convertToRoman');

describe('convertToRoman', () => {
  test('returns the correct Roman numeral for valid numbers', () => {
    expect(convertToRoman(1)).toBe('I');
    expect(convertToRoman(9)).toBe('IX');
    expect(convertToRoman(49)).toBe('XLIX');
    expect(convertToRoman(94)).toBe('XCIV');
    expect(convertToRoman(399)).toBe('CCCXCIX');
    expect(convertToRoman(2021)).toBe('MMXXI');
    expect(convertToRoman(3999)).toBe('MMMCMXCIX');
  });

  test('returns an error message for invalid numbers', () => {
    expect(convertToRoman(0)).toBe(
      'Invalid number. Please enter a number between 1 and 3999.'
    );
    expect(convertToRoman(-10)).toBe(
      'Invalid number. Please enter a number between 1 and 3999.'
    );
    expect(convertToRoman(4000)).toBe(
      'Invalid number. Please enter a number between 1 and 3999.'
    );
  });
});


