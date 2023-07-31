/*v e v -> V
V e f -> f
f e f -> f 

op1 e op2 e op3 e op4 -> v

v xor v -f
v xor f -v
f xor v -v 
f xor f -f

!v -> f
!f _> v */


function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

