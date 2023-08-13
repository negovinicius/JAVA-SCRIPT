Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}
const Resultado = function (nota) {
    if (nota.entre(29, 30)) {
        console.log('Parabéns, você ganhou o prêmio!')
    } else if (nota.entre(21, 27)) {
        console.log('Parabéns, você foi Aprovado!')
    } else if (nota.entre(11, 20)) {
        console.log('Você está em recuperação')
    } else if (nota.entre(0, 10)) {
        console.log('Você foi reprovado, mas não desista a vida é cheia e tentativas e erros.')
    } else {
        console.log('Nota invalida')
    }
}

