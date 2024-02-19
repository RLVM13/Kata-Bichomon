// GRUPO DE CLASE
// Vanesa Edo
// Rafael Lasso de la Vega 

console.log(document.title);

document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";

document.querySelector("body > main > div:nth-child(6)").style.backgroundColor="yellow";

console.log(document.querySelector("body > header > div > a").href);

let dominio=document.querySelector("body > header > div > a").href;
dominio=dominio.substr(dominio.indexOf("."));
console.log(dominio);

console.log(document.querySelectorAll("body > main > div:nth-child(6)"));
console.log(document.querySelectorAll("body > main > div:nth-child(9)"));
console.log(document.querySelectorAll("body > main > div:nth-child(12)"));
console.log(document.querySelectorAll("body > main > div:nth-child(15)"));
console.log(document.querySelectorAll("body > main > div:nth-child(18)"));
console.log(document.querySelectorAll("body > main > div:nth-child(21)"));
console.log(document.querySelectorAll("body > main > div:nth-child(24)"));
console.log(document.querySelectorAll("body > main > div:nth-child(27)"));


let fuente = document.getElementsByTagName("img");
console.log(fuente);
for (let i = 0; i < fuente.length; i++) {
    fuente[i].src="https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}

document.querySelectorAll("body > main > div > div > span > small > a").style.backgroundColor="blue";
