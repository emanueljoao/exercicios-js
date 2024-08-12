// var valores = [2,4,5,6,7,8,1,0,9,12,11]
// valores.sort((a, b) => b - a)
// console.log(valores)

// for (let pos = 1; pos < valores.length; pos++) {
//     valores.sort()
//     console.log(valores[pos])
// }

// for ( let pos in valores) {
//     console.log(valores[pos])
// }

// console.log(valores.length)

// console.log(valores.indexOf(2))

var letras = ['a','A','s','S','K','k','l','L']
letras.sort((a, b) => a.toLowerCase() < b.toLocaleLowerCase() ? 1 : -1)
console.log(letras)
