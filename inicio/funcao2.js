// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel
//A seta => substitui a tag function
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3));

const imrprimir2 = a => console.log(a)
imrprimir2('Legal!!!')
