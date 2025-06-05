
let personagens = JSON.parse(sessionStorage.personagens)
let codigo = sessionStorage.codigo

console.log(personagens[codigo])

let div = document.querySelector('div')
let filhos = div.children
console.log(filhos)