/**
 * Get list of quotations contents in text
 * @param {string} text the text that we want to get quotations contents from
 * @returns {any} list of quotations contents
 */
function getQuotationsContents(text) {
  const quotes = [
    ['StraightDoubleQuotes', '\u0022', '\u0022'],
    ['StraightDoubleQuotesWide', '\uFF02', '\uFF02'],
    ['StraightSingleQuotes', '\u0027', '\u0027'],
    ['CommaDoubleQuotes', '\u201C', '\u201D'],
    ['CommaSingleQuotes', '\u2018', '\u2019'],
    ['CurlyDoubleQuotesReversed', '\u201F', '\u201D'],
    ['CurlySingleQuotesReversed', '\u201B', '\u2019'],
    ['LowCurlyDoubleQuotes', '\u201E', '\u201D'],
    ['LowCurlyDoubleQuotesReversed', '\u2E42', '\u201D'],
    ['LowCurlySingleQuotes', '\u201A', '\u2019'],
    ['AngleDoubleQuotes', '\u00AB', '\u00BB'],
    ['AngleSingleQuotes', '\u2039', '\u203A'],
    ['PrimeSingleQuotes', '\u2035', '\u2032'],
    ['PrimeDoubleQuotes', '\u2036', '\u2033'],
    ['PrimeTripleQuotes', '\u2037', '\u2034'],
    ['PrimeDoubleQuotes', '\u301D', '\u301E'],
    ['PrimeSingleQuotes', '\u0060', '\u00B4'],
    ['LowPrimeDoubleQuotesReversed', '\u301F', '\u301E'],
  ];

  const result = [];

  quotes.forEach((quote) => {
    const regex = new RegExp(`${quote[1]}(.*?)${quote[2]}`, 'g');
    let match = regex.exec(text);
    while (match !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (match.index === regex.lastIndex) {
        regex.lastIndex += 1;
      }

      // The result can be accessed through the `m`-variable.
      match.filter((_, groupIndex) => groupIndex === 1).forEach((matchText) => {
        result.push(matchText);
      });

      match = regex.exec(text);
    }
  });

  return result;
}

module.exports = {
  getQuotationsContents,
};
