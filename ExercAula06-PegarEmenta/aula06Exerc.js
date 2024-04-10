function pegarEmenta() {
let ementa = document.querySelectorAll("h4+p:nth-of-type(2n)");
for(let i=0; i<ementa.length; i++){
console.log(ementa[i].innerText);
}
}
