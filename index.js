const holdings = 5796.31;

const saveCost = 15000 / holdings;

function withPercent(num) {
  return "|" + num.toFixed(2) + "%|";
}

const level0 = 15500 / holdings;
const level1 = 16000 / holdings;
const level2 = 17000 / holdings;
const level3 = 18000 / holdings;
const level4 = 19000 / holdings;
const level5 = 20000 / holdings;
console.log("curre:", 2.4303);
console.log("|本息之和", "|卖出净值", "|利润率|");
console.log("|------|------|------|");
console.log("|15000:|", saveCost.toFixed(4), withPercent(0));
console.log("|15500:|", level0.toFixed(4), withPercent(500 / 15000));
console.log("|16000:|", level1.toFixed(4), withPercent(1000 / 15000));
console.log("|17000:|", level2.toFixed(4), withPercent(2000 / 15000));
console.log("|18000:|", level3.toFixed(4), withPercent(3000 / 15000));
console.log("|19000:|", level4.toFixed(4), withPercent(4000 / 15000));
console.log("|20000:|", level5.toFixed(4), withPercent(5000 / 15000));

// console.log(holdings - 5000 / 2.5711);
