const x1 = 10;
const x2 = 30;
const a = 32;

console.log( a > x1 && a < x2);


const totalBalance = 120000;
const outCash = Number(prompt("Сумма для зняття з балансу"));
const addCash =  Number(prompt("Скільки грошей хочете покласти на рахунок?"));
const bonus = 0.03//*12
const result = ((totalBalance - outCash) + addCash) * (1 * bonus * 12);
console.log(result);