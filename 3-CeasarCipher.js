function rot13(str) {
  let array = [];
  let pairings = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
  };
  for (let i = 0; i < str.length; i++) {
    if (pairings.hasOwnProperty(str[i])) {
      array.push(pairings[str[i]]);
    } else {
      array.push(str[i]);
    }
  }

  return array.join("");
}

// function rot13(str) {
//   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let newStr = "";

//   for (let i = 0; i < str.length; i++) {
//     let index = alphabet.indexOf(str[i]);
//     if (index === -1) {
//       newStr += str[i];
//     } else {
//       let newIndex = (index + 13) % 26;
//       newStr += alphabet[newIndex];
//     }
//   }
//   return newStr;
// }

console.log(rot13("SERR PBQR PNZC")); //FREE CODE CAMP
// console.log(rot13("SERR CVMMN!")); //FREE PIZZA!
// console.log(rot13("SERR YBIR?")); //FREE LOVE?
// console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
// //THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
