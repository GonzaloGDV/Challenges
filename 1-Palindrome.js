function palindrome(str) {
  let strClean = str.toLowerCase().replace(/[\W_]/g, "");
  for (let i = 0; i < strClean.length / 2; i++) {
    if (strClean[i] !== strClean[strClean.length - 1 - i]) return false;
  }
  return true;
}

// function palindrome(str) {
//   let strClean = str.split(/[\W_]/g).join("").toLowerCase();
//   for (let i = 0; i < strClean.length / 2; i++) {
//     if (strClean[i] !== strClean[strClean.length - 1 - i]) return false;
//   }
//   return true;
// }

console.log(palindrome("race car")); //equal(true)
// console.log(palindrome("not a palindrome")); //equal(false)
// console.log(palindrome("A man, a plan, a canal. Panama")); //equal(true)
// console.log(palindrome("never odd or even")); //equal(true)
// console.log(palindrome("nope")); //equal(false)
// console.log(palindrome("almostomla")); //equal(false)
// console.log(palindrome("My age is 0, 0 si ega ym.")); //equal(true)
// console.log(palindrome("1 eye for of 1 eye.")); //equal(false)
// console.log(palindrome("0_0 (: /- :) 0–0")); //equal(true)
