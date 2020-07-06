function toUpperCase (str) {
  return str.toUpperCase();
}

function onlyFirstChar(str) {
  return str.charAt(0);
}

function concatenate(str1, str2) {
  return [...str1, ...str2].join('');
}

module.exports = {toUpperCase, onlyFirstChar, concatenate};