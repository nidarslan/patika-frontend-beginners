// function helloWorld() {
//   console.log("Hello World");
// }

// function hello() {
//   console.log("merhaba");
//   helloWorld();
// }

// hello(); //calistir

// let firstName = "Lorem";

// function greetings() {
//   console.log("merhaba");
// }

// greetings();

const PI = 3.14; // Formülde kullandığımız sabit sayı pi'yi bu şekilde alabiliriz.
function daireAlaniHesaplama(r) {
  // Fonksiyonumuz, r parametresini alıyor.
  var islemSonucu = PI * r * r; // Dairenin alanını hesaplayacak işlemimiz.
  return islemSonucu; // return ifadesiyle sonucu dönüyoruz.
}

var donenSonuc = daireAlaniHesaplama(3); // Argüman olarak, alanını hesaplamak istediğimiz herhangi bir dairenin yarıçapı için 3 rakamı verildi.
console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.
