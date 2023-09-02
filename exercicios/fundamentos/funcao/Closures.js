// Closure é o escopo criado quando uma funcao é declarada, esse espoco permite a funcao acessar e manipular variaveis exernas a funcão.

//Contexto léxcio em acao

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())