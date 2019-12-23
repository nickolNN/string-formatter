const prepositions = [
  'a',
  'the',
  'an',
  'and',
  'or',
  'nor',
  'at',
  'but',
  'by',
  'for',
  'in',
  'of',
  'off',
  'on',
  'out',
  'per',
  'to',
  'up',
  'via',
  'as',
  'for',
];

const toLowerCase = new RegExp(`\\s(${prepositions.join('|')})\\s`, 'gi');
const toUpperCase = new RegExp('\\s(dba|aaa|ai|usa|fcu|it|ny|tr|or)\\s?|\\s?(llc)\\s?|(\\s[a-z])|(^[a-z])|([\'./& -]\\s?[a-z])', 'gi');

const formatString = inputString => inputString
  .toString()
  .toLowerCase()
  .replace(toUpperCase, letter => letter.toUpperCase())
  .replace(toLowerCase, preposition => preposition.toLowerCase());


const formatLine = line => Promise.resolve({
  ackId: line.ackId,
  planName: formatString(line.planName),
  sponsorDfeName: formatString(line.sponsorDfeName),
});

const format = rawData => new Promise((resolve) => {
  const formatted = rawData.map(line => formatLine(line));
  Promise.all(formatted).then(res => resolve(res));
});

export default { format };
