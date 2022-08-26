function telephoneCheck(str) {
  let regExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;

  return regExp.test(str);
}

// function telephoneCheck(str) {
//   if (str[0] === "(" && str[str.length - 1] === ")") return false;
//   if (str.includes("(") && !str.includes(")")) return false;
//   if (!str.includes("(") && str.includes(")")) return false;
//   if (str.includes("?")) return false;
//   if (str[0] === "-") return false;
//   if ((str.match(/-/g) || []).length >= 3) return false;
//   let cleanStr = str.split(/[\W_]/g).join("");
//   if (cleanStr.length > 11) return false;
//   if (cleanStr.length < 10) return false;
//   if (cleanStr.length === 11 && cleanStr[0] !== "1") return false;

//   return true;
// }

// ---------- TEST ----------
console.log(telephoneCheck("555-555-5555")); //true.
// console.log(telephoneCheck("1 555-555-5555")); //true.
// console.log(telephoneCheck("1 (555) 555-5555")); //true.
// console.log(telephoneCheck("5555555555")); //true.
// console.log(telephoneCheck("555-555-5555")); //true.
// console.log(telephoneCheck("(555)555-5555")); //true.
// console.log(telephoneCheck("1(555)555-5555")); //true.
// console.log(telephoneCheck("555-5555")); //false.
// console.log(telephoneCheck("5555555")); //false.
// console.log(telephoneCheck("1 555)555-5555")); //false.
// console.log(telephoneCheck("1 555 555 5555")); //true.
// console.log(telephoneCheck("1 456 789 4444")); //true.
// console.log(telephoneCheck("123**&!!asdf#")); //false.
// console.log(telephoneCheck("55555555")); //false.
// console.log(telephoneCheck("(6054756961)")); //false.
// console.log(telephoneCheck("2 (757) 622-7382")); //false.
// console.log(telephoneCheck("0 (757) 622-7382")); //false.
// console.log(telephoneCheck("-1 (757) 622-7382")); //false.
// console.log(telephoneCheck("2 757 622-7382")); //false.
// console.log(telephoneCheck("10 (757) 622-7382")); //false.
// console.log(telephoneCheck("27576227382")); //false.
// console.log(telephoneCheck("(275)76227382")); //false.
// console.log(telephoneCheck("2(757)6227382")); //false.
// console.log(telephoneCheck("2(757)622-7382")); //false.
// console.log(telephoneCheck("555)-555-5555")); //false.
// console.log(telephoneCheck("(555-555-5555")); //false.
// console.log(telephoneCheck("(555)5(55?)-5555")); //false.
// console.log(telephoneCheck("55 55-55-555-5")); //false.
// console.log(telephoneCheck("11 555-555-5555")); //false.
