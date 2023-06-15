// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polybiusGrid = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };

  function polybius(input, encode = true) {
    if (!input) {
      return "";
    }

    const decode = (input) => {
      if (input.replace(/ /g, "").length % 2 !== 0) {
        return false;
      }

      return input
        .split(" ")
        .map((group) => {
          if (group === " ") {
            return " ";
          }

          const coordinates = group.match(/.{1,2}/g);
          return coordinates
            .map((coordinate) => {
              if (coordinate === "42") {
                return "i";
              }
              return Object.keys(polybiusGrid).find(
                (key) => polybiusGrid[key] === coordinate
              );
            })
            .join("")
            .replace(/ii+/g, "(i/j)");
        })
        .join(" ");
    };

    const encodedMessage = [...input.toLowerCase()]
      .map((char) => {
        if (char === " ") {
          return " ";
        }
        if (char === "i" || char === "j") {
          return polybiusGrid.i;
        }
        return polybiusGrid[char];
      })
      .join("");

    if (encode) {
      return encodedMessage;
    } else {
      return decode(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };