// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva',
    }
}

console.log(criarPessoa())

function CriarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(CriarProduto('Maquina', 20))
console.log(CriarProduto('Paula', 203))
console.log(CriarProduto('Muina', 220))
console.log(CriarProduto('Maqa', 220))