function convertToRoman(num) {
  const numerals = {
    1: "I",
    4: "II",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let romanized = "";
  const decimalKeys = Object.keys(numerals).reverse();

  decimalKeys.forEach((key) => {
    while (key <= num) {
      romanized += numerals[key];
      num -= key;
    }
  });

  return romanized;
}

// function convertToRoman(num) {
//   let romanNum = "";
//   let arrayNum = num.toString().split("").reverse();
//   if (Number(arrayNum[3]) > 0) {
//     if (Number(arrayNum[3]) === 3) romanNum += "MMM";
//     if (Number(arrayNum[3]) === 2) romanNum += "MM";
//     if (Number(arrayNum[3]) === 1) romanNum += "M";
//   }
//   if (Number(arrayNum[2]) > 0) {
//     if (Number(arrayNum[2]) === 9) romanNum += "CM";
//     if (Number(arrayNum[2]) === 8) romanNum += "DCCC";
//     if (Number(arrayNum[2]) === 7) romanNum += "DCC";
//     if (Number(arrayNum[2]) === 6) romanNum += "DC";
//     if (Number(arrayNum[2]) === 5) romanNum += "D";
//     if (Number(arrayNum[2]) === 4) romanNum += "CD";
//     if (Number(arrayNum[2]) === 3) romanNum += "CCC";
//     if (Number(arrayNum[2]) === 2) romanNum += "CC";
//     if (Number(arrayNum[2]) === 1) romanNum += "C";
//   }
//   if (Number(arrayNum[1]) > 0) {
//     if (Number(arrayNum[1]) === 9) romanNum += "XC";
//     if (Number(arrayNum[1]) === 8) romanNum += "LXXX";
//     if (Number(arrayNum[1]) === 7) romanNum += "LXX";
//     if (Number(arrayNum[1]) === 6) romanNum += "LX";
//     if (Number(arrayNum[1]) === 5) romanNum += "L";
//     if (Number(arrayNum[1]) === 4) romanNum += "XL";
//     if (Number(arrayNum[1]) === 3) romanNum += "XXX";
//     if (Number(arrayNum[1]) === 2) romanNum += "XX";
//     if (Number(arrayNum[1]) === 1) romanNum += "X";
//   }
//   if (Number(arrayNum[0]) > 0) {
//     if (Number(arrayNum[0]) === 9) romanNum += "IX";
//     if (Number(arrayNum[0]) === 8) romanNum += "VIII";
//     if (Number(arrayNum[0]) === 7) romanNum += "VII";
//     if (Number(arrayNum[0]) === 6) romanNum += "VI";
//     if (Number(arrayNum[0]) === 5) romanNum += "V";
//     if (Number(arrayNum[0]) === 4) romanNum += "IV";
//     if (Number(arrayNum[0]) === 3) romanNum += "III";
//     if (Number(arrayNum[0]) === 2) romanNum += "II";
//     if (Number(arrayNum[0]) === 1) romanNum += "I";
//   }

//   return romanNum;
// }

console.log(convertToRoman(2)); //string II.
// console.log(convertToRoman(3)); // string III.
// console.log(convertToRoman(4)); // string IV.
// console.log(convertToRoman(5)); // string V.
// console.log(convertToRoman(9)); // string IX.
// console.log(convertToRoman(12)); // string XII.
// console.log(convertToRoman(16)); // string XVI.
// console.log(convertToRoman(29)); // string XXIX.
// console.log(convertToRoman(44)); // string XLIV.
// console.log(convertToRoman(45)); // string XLV.
// console.log(convertToRoman(68)); // string LXVIII
// console.log(convertToRoman(83)); // string LXXXIII
// console.log(convertToRoman(97)); // string XCVII
// console.log(convertToRoman(99)); // string XCIX
// console.log(convertToRoman(400)); // string CD
// console.log(convertToRoman(500)); // string D
// console.log(convertToRoman(501)); // string DI
// console.log(convertToRoman(649)); // string DCXLIX
// console.log(convertToRoman(798)); // string DCCXCVIII
// console.log(convertToRoman(891)); // string DCCCXCI
// console.log(convertToRoman(1000)); // string M
// console.log(convertToRoman(1004)); // string MIV
// console.log(convertToRoman(1006)); // string MVI
// console.log(convertToRoman(1023)); // string MXXIII
// console.log(convertToRoman(2014)); // string MMXIV
//console.log(convertToRoman(3999)); // string MMMCMXCIX
