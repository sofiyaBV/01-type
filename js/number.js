// Парс числа 
// let elementWith = "50px"
// elementWith = Number.parseInt(elementWith)
// console.log(elementWith);
// let elementHeign = "134.32px"
// elementHeign = Number.parseFloat(elementHeign)
// console.log(elementHeign);
// let elementHeign2 = "134.32px"
// elementHeign2 = Number.parseInt(elementHeign2)
// console.log(elementHeign2);
// // ---------------------------------------
// const base = 2
// const power = 5
// const result = Math.pow(base, power)
// console.log(result1);
//--------------------------------------

//1

// let number = prompt("Введіть число");
// number = Number(number)
// // console.log(number)

// //2
// let power = prompt("Введіть степінь");
// power = Number(power)

// const result = Math.pow(number, power)
// console.log(result)


//---------------------------------------
// const max = 80
// const min = 10
// let random = Math.round( Math.random() * (max-min)+min)
// console.log(random);

// let a = 0.17;
// let b = 0.24;
// console.log((a + b + a).toFixed(2));


let salary = Number(prompt("Введіть зарплатню"));
const bonus = 0.15;
const taxes = 0.19;
let result = salary + salary * bonus -  taxes;
alert(`Ваша зарплатня = ${result}`);