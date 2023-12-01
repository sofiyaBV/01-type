const massage = "В цьому рядку 32 символа kfkf "
console.log(massage.length);//количество символов

const firstName = "Jon"
const lastName = "Stalone"
const fullname = firstName + " " + lastName
console.log(`${firstName} ${lastName}`);//конкатенація

const froomNumber = 32
const userName = "Olexandr Yaremchuk"
const hotelName = "Rizord"
console.log(`Гість ${userName} проживає в готелі "${hotelName}", в номері ${froomNumber} `);

const btnName = "send"
const user_Name =" JOH "
const toUpperCase = btnName.toUpperCase()//Верхний регистр
const toLowerCase = user_Name.toLowerCase()//Нижний регистр
console.log(toUpperCase);
console.log(toLowerCase);


const blackListWorld1 = "спам"

const string1 = "Це не СПам,уве в порядку  завтра";

console.log(string1.toLocaleLowerCase().includes(blackListWorld1));





