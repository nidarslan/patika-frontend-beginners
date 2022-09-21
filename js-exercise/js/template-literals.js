let username = "nida";
const DOMAIN = "hello.org";

let email = username + "@" + DOMAIN;
console.log(
  "Merhaba ",
  username,
  " sitemize hos geldin!",
  " mail adresin:",
  email
);

let info = `Merhaba ${username} sitemize hos geldin.. mail adresin: ${email}
mail adresi uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 5} TL
GUNUN TARIH BILGISI: ${new Date().getDate()}`;
console.log(info);
