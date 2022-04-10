//o'zgaruvchilar

let name1 = 'Muhammad';
//eski
var age = 12;

//1)faqat harflar sonlar va 2t sinvol va $ _
//2)let function var const ......
//3)o'zgaruvchilar son bilan boshlanishi kerak emas.
//4)camelCase shaklida elon qilish maslahat beriladi

//Ma'lumot turlari

//1)number
let age = 12;
let age_2 = 12.3;
//2)bigInt
//0.....

//3)string
const firstName = "Kada";
const firstName_2 = 'Kadish';
const firstName_3 = `Qodish ${firstName}`;
console.log(firstName_3);

//4)boolean
let is_Nameber = true;
console.log(is_Nameber);

//5)object

let foydalanuvchi = {
    nomi:"muhammad",
    age:17
}
console.log(foydalanuvchi);

//6)Symbol

let key = Symbol("hali");
console.log(key);

//7)null

//null => hech narsa yoq
let user = null;
console.log(user);

//8)undefined biriktirilmagan
let stack = undefined;
console.log(typeof stack);

//constlar bular ozgarmas
const LIMIT = 12;
