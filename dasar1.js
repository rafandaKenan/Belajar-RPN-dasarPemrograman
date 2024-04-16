// cara membuat variabel
let x = "x";
var y = "y";
const z = "z";

// Variabel dapat menampung tipe data string(teks), integer(angka), array, boolean, object

let type = "Vario 150"; // string
let tahun = 2018; // int tanpa koma
let kondisiBagus = true; // boolean
let harga = 5000.5; // int dengan koma

// Operator Aritmatika
let angka1, angka2;
angka1 = 10;
angka2 = 5;

console.log(angka1 + angka2, "pertambahan"); // 15
console.log(angka1 - angka2, "pengurangan"); // 5
console.log(angka1 / angka2, "pembagian"); // 2
console.log(angka1 * angka2, "perkalian"); // 50
console.log(angka1 % angka2, "modulus"); // 0

// Mengisi Variabel

let penampungHasilAritmatika = angka1 + angka2;
console.log(penampungHasilAritmatika); // 15

penampungHasilAritmatika = angka1 - 3 * angka2;
console.log(penampungHasilAritmatika); // -5

penampungHasilAritmatika = angka1 / angka2;
console.log(penampungHasilAritmatika); // 2

penampungHasilAritmatika = angka1 * angka2;
console.log(penampungHasilAritmatika); // 50

penampungHasilAritmatika = angka1 % angka2;
console.log(penampungHasilAritmatika); // 0

// Operator Aritamtika pada string hanya bisa menggunakan +
let firstName, lastName, fullName;
firstName = "Kenan";
lastName = "Rafandra";
fullName = firstName + " " + lastName;

console.log(fullName);
console.log(firstName + " " + lastName);
console.log(firstName - lastName); // Null/Nan

/*

Cara membaca code
code dibaca dari kiri ke kanan dan dari atas ke bawah
Contoh

 */

let number = 20;
console.log(number + 10); // 30
number = 10;
console.log(number + 10); // 20
number = false;
console.log(number + 10); // 10

console.log(true + 10); // 11
// Karena false bernilai 0 dan true bernilai 1 maka hasil dari false + 10 = 10 sedangkan true + 10 = 11

// Membaca Eror
// Jangan Takut Eror, takutlah jika tidak terjadi eror, karena jika ada bug tapi tidak terdetect erornya dimana akan membuat
// programmer muak untuk mencari letak erornya

// Contoh Eror
// const hewan = "jerapah";
// console.log(hewan);
// hewan = gajah;

// jika ingin auto komen maka blok areanya kemudian ctrl + /

// Selalu teliti dan perlu dibiasakan karena ngoding itu habit
