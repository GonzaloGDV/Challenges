const currencyUnit = [
  ['PENNY', 1],
  ['NICKEL', 5],
  ['DIME', 10],
  ['QUARTER', 25],
  ['ONE', 100],
  ['FIVE', 500],
  ['TEN', 1000],
  ['TWENTY', 2000],
  ['ONE HUNDRED', 10000],
];

function checkCashRegister(price, cash, cid) {
  let cashInDrawer = 0;
  let changeDue = (cash - price) * 100;
  let changeDueCheck = changeDue;
  let changeToClient = [];
  let changeToClientFilter = [];

  for (let i = 0; i < cid.length; i++) {
    cashInDrawer += cid[i][1];
  }
  cashInDrawer = cashInDrawer * 100;

  if (changeDue > cashInDrawer) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  if (changeDue === cashInDrawer) return { status: 'CLOSED', change: cid };

  while (changeDueCheck > 0) {
    for (let j = cid.length - 1; j >= 0; j--) {
      cid[j][1] = Math.round(100 * cid[j][1]);
      while (
        currencyUnit[j][1] <= changeDueCheck &&
        cid[j][1] * 100 >= changeDueCheck
      ) {
        changeDueCheck -= currencyUnit[j][1];
        cid[j][1] -= currencyUnit[j][1];
        changeToClient.push([currencyUnit[j][0], currencyUnit[j][1]]);
      }
    }
    if (changeDueCheck > 0) return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  for (let k = currencyUnit.length - 1; k >= 0; k--) {
    let totalAmountPerDenomination = 0;
    for (let l = 0; l < changeToClient.length; l++) {
      if (currencyUnit[k][0] === changeToClient[l][0]) {
        totalAmountPerDenomination += changeToClient[l][1];
      }
    }
    if (totalAmountPerDenomination > 0) {
      changeToClientFilter.push([
        currencyUnit[k][0],
        totalAmountPerDenomination / 100,
      ]);
    }
  }
  return { status: 'OPEN', change: changeToClientFilter };
}

// const currencyUnit = {
//   "PENNY": 1,
//   "NICKEL": 5,
//   "DIME": 10,
//   "QUARTER": 25,
//   "ONE": 100,
//   "FIVE": 500,
//   "TEN": 1000,
//   "TWENTY": 2000,
//   "ONE HUNDRED": 10000
// }

// function checkCashRegister(price, cash, cid) {

//   let changeSum = cash * 100 - price * 100;
//   let changeSumCheck = changeSum;
//   let change = [];
//   let status = '';

//   let cidSum = 0;
//   let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();

//   filteredCid.forEach(elem => {
//     let curr = elem[0];
//     let currSum = elem[1] * 100;
//     cidSum += currSum;
//     let amount = 0;
//     while (changeSum >= currencyUnit[curr] && currSum > 0) {
//       amount += currencyUnit[curr];
//       changeSum -= currencyUnit[curr];
//       currSum -= currencyUnit[curr];
//     }
//     if (amount !== 0) {
//       change.push([curr, amount / 100]);
//     }
//   });

//   if (changeSum > 0) {
//     status = 'INSUFFICIENT_FUNDS';
//     change = [];
//   } else if (changeSum == 0 && changeSumCheck == cidSum) {
//     status = 'CLOSED';
//     change = cid;
//   } else {
//     status = 'OPEN';
//   }
//   return { 'status': status, 'change': change };
// }

// ---------- TEST ----------
// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100],
//   ])
// );
// {status: "OPEN", change: [["QUARTER", 0.5]]}.

// console.log(
//   checkCashRegister(3.26, 100, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100],
//   ])
// );
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// );
// {status: "INSUFFICIENT_FUNDS", change: []}.

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 1],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// );
// {status: "INSUFFICIENT_FUNDS", change: []}.

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.5],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// );
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
