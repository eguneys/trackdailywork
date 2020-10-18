const range = (from, to) => {
  let res = [];
  from = from.charCodeAt(0);
  to = to.charCodeAt(0);
  for (let i = from; i <= to; i++) {
    res.push(String.fromCharCode(i));
  }
  return res;
};

const randInt = (max) => {
  return Math.floor(Math.random() * max);
};

const chars = [...range('0', '9'), 
               ...range('a', 'z'),
               ...range('A', 'Z')];

const nbChars = chars.length;

const nextChar = () => chars[randInt(nbChars)];
const nextString = len => {
  let res = "";
  for (let i = 0; i < len; i++) {
    res += nextChar();
  }
  return res;
};

module.exports = {
  nextChar,
  nextString
};
