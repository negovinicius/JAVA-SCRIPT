var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)

}
console.log('fora =', numero)

// let tem um scopo a mais que é o scopo de bloco, por isso deve ter preferencia e ser mais usado.
// se colocar 2 depois do numero no primeiro bloco o programa puxa do scopo de fora e imprime o número 1.