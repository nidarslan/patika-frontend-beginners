let lastChild = document.querySelector("ul#list>:last-child");
lastChild.innerHTML = "son oge degisti";

let firstChild = document.querySelector("ul#list>:first-child");
firstChild.innerHTML = "ilk oge degisti";

let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement("li");

liDOM.innerHTML = "Kendi Olusturdugumuz Oge";

ulDOM.append(liDOM);
