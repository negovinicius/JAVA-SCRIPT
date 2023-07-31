const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
Olá
${nome}! `

console.log(concatenacao, template)

// expressoes..
console.log(`1 + 1 = ${1 + 1}`)
// só interpreta o que está entre chaves {}

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('Cuidado')}!`)