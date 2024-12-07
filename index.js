// 1-milol

// let person = {
//     name: "Azizbek",
//     age: 15,
//     location: "OLtiariq"
// };

// console.log("Name:", person.name);
// console.log("Age:", person.age);
// console.log("Location:", person.location);

// 2-misol


// const person = {
//     name: "Azizbek",
//     age: 15,
//     location: "Oltiariq",
//     address: {
//         city: "fergana",
//         Code: "542669"
//     }
// };

// console.log("Name:", person.name);
// console.log("Age:", person.age);
// console.log("Location:", person.location);
// console.log("City:", person.address.city);
// console.log("Code:", person.address.Code);


// 3-misol


// let obj = {};

// obj.name = "Ali";

// obj.name = "Vali";

// delete obj.name;

// console.log(obj);


// 4-misol

// const user = {
//     name: "Azizbek",
//     age: 30,
//     address: {
//         city: "fergana",
//         street: "Amir Temur Street",
//         zipCode: 959565,
//     },
//     contact: {
//         email: "azizbek@gimail.com",
//         phone: {
//             home: "906553254",
//             work: "218562144",
//         },
//     },
// };

// const {
//     contact: {
//         phone: { home, work },
//     },
// } = user;

// console.log(home);
// console.log(work);


// 5-  optional chainning nima uchun kerakligi haqida 3 ta sabab yozing.

// 1-sabab

// optional chainni vazifasi xafsiz yechimga erishish  Bu holatda nima ro'y beradi  JavaScript bu holatda address ni bor yoki yo'q ekanligini tekshiradi
// agar yo'q bolsa undifaind qaytaradi  objektning ilk propertysi error qaytarmaydi user adress qilsak ham bo'ladi

// 2-sabab

// Shunday qilib xulosa shuki Object lar ichidagi metod yoki property ga xavfsiz kirishimiz uchun Optional chaining dan foydalansak bo'ladi

