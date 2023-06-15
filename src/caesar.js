// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const inputLowerCase = input.toLowerCase();

    let result = "";

    [...inputLowerCase].forEach((char) => {
      if (!alphabet.includes(char)) {
        result += char; // Add non-alphabetic characters directly
        return;
      }

      const charIndex = alphabet.indexOf(char);
      const shiftedIndex = ((charIndex + (encode ? shift : -shift) + 26) % 26);

      result += alphabet[shiftedIndex];
    });

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
