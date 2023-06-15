// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || !isUnique(alphabet)) {
      return false;
    }

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const substitutionAlphabet = alphabet.toLowerCase();

    const message = input.toLowerCase();

    let result = "";
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (char === " ") {
        result += " ";
        continue;
      }

      const index = encode ? standardAlphabet.indexOf(char) : substitutionAlphabet.indexOf(char);

      if (index >= 0) {
        result += encode ? substitutionAlphabet[index] : standardAlphabet[index];
      } else {
        result += char;
      }
    }

    return result;
  }

  function isUnique(alphabet) {
    const seen = new Set(alphabet);
    return seen.size === alphabet.length;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };