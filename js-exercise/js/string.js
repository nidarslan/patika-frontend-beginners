let email = "miinidars@gmail.com";
let myName = "nida";

//length
console.log(email.length);

//ilk karakter bulmak
console.log(myName[0]);
console.log(myName.charAt(1));

// buyuk/kucuk harf
myName = myName.toUpperCase();
console.log(myName);
myName = myName.toLowerCase();
console.log(myName);

//string icinde bilgi aramak, bulmak --> SEARCH
console.log(email.search("@"));
console.log(email[9]);

email.search("olmayan"); //-1 döndürür.

//belli bir yere kadar al --> slice : (domain bilgisi)
let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);

console.log(DOMAIN.slice(0, DOMAIN.indexOf("."))); //sadece gmail kısmı

//bilgi degistir --> replace

email = email.replace("gmail.com", "hotmail.com");
console.log(email);

//istenen bilgi var mi? --Z includes
email.includes("@"); //true

//startsWidth, endsWidth
console.log(email.endsWith("hotmail.com"));

//ilk harfleri buyuk yapmak
let fullName = `${myName[0].toUpperCase()}${myName.slice(1)}`;

console.log(fullName);

let url = "www.kodluyoruz.org";
let language = "Java";

language = language.replace("Java", "JavaScript");
console.log(language);

console.log(url.indexOf("."));
//indexOf kullanarak noktanın yerini öğren
domain = url.slice(3 + 1);
//3+1 olması noktadan sonrasını al demek.
console.log(domain);
