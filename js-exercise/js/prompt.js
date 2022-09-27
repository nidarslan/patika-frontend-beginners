let fullName = prompt("Lütfen isminizi giriniz");
console.log(fullName);

let greeting = document.querySelector("#greeting");

greeting.innerHTML = `${greeting.innerHTML} <small style="color:pink">${fullName}</small>`;
