let userName = prompt("adinizi giriniz:");

if (userName.length) {
  //if kismi her zaman dogruysa calisir
  console.log(`Kullanici bilginiz ${userName}`);
} else {
  console.log("bilgi yok");
}

let x = 3.15;
let y = 3.16;

if (x > y) {
  console.log(x + " sayisi" + y + " sayısından büyüktür.");
} else {
  console.log(y + " sayisi" + " " + x + " sayısından büyüktür.");
}

var ogrVizeNot = 45;
var ogrFinalNot = 60;
var ogrOrtalama = ogrVizeNot * 0.3 + ogrFinalNot * 0.7;

if (ogrOrtalama > 0 && ogrOrtalama < 30) {
  console.log("Not ortalamanız: " + ogrOrtalama + " KALDINIZ(FF).");
} else if (ogrOrtalama > 31 && ogrOrtalama < 49) {
  console.log("Not ortalamnız: " + ogrOrtalama + " DC - KOŞULLU ");
} else if (ogrOrtalama > 50 && ogrOrtalama < 84) {
  console.log("Not ortalamnız: " + ogrOrtalama + " CC - GEÇTİNİZ ");
} else if (ogrOrtalama > 85 && ogrOrtalama <= 100) {
  console.log("Not ortalamnız: " + ogrOrtalama + " AA - GEÇTİNİZ ");
}

var randomSayi = Math.floor(Math.random() * 10);

//Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır

var tahmin = prompt(
  "1-10'a kadar bir sayı gir ve rastgele sayıyı bulmaya çalış!"
);

if (tahmin === randomSayi && tahmin != null) alert("Bildin!!!");
else if (tahmin == "") alert("Boş giriş yaptınız!");
else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
else {
  alert("Bir daha denee :(, Random sayi: " + randomSayi);
}
