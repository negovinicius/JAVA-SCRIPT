const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0 , 3))// ler até a somente até onde vai a string
console.log('Escola' .concat(escola).concat("!")) //adicionar e concatenar um nome
console.log(escola.replace(/\w/g, 'e')) // rejax, para repor tudo.
console.log(escola.replace(3, 'e')) // para repor na terceira casa decimar, que no caso era o number 3.

console.log('Ana,Maria, Pedro'.split(',')) // poderia colocar um rejax /,/ funcionaria.



