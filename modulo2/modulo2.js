/*Github
Neste exercício, você vai criar 5 funções. Você pode escolher entre usar function ou arrow function: 
*/
var teste = "teste"
console.log (teste)

//1. Soma: recebe dois números e retorna a soma//
const funcaoSoma = (n1, n2) => n1 + n2

console.log (funcaoSoma (20, 2))

//2. Subtrai: recebe dois números e retorna a diferença//
const funcaoSubtrai = (n1, n2) => n1 - n2

console.log (funcaoSubtrai (20, 2))


// 3 - Multiplica: recebe dois números e retorna o produto//
const funcaoMultiplica = (n1, n2) => n1 * n2

console.log (funcaoMultiplica (20, 2))


// 4 - Divide: recebe dois números e retorna o quociente//
const funcaoDivide = (n1, n2) => n1 / n2

console.log (funcaoDivide (20, 2))


/* 5 - MostraResultado: recebe dois numeros e executa um console para cada operação, exibindo o nome da operação e o resultado

Seu console deve ter o formato: console.log([nome_da_operacao] entre ${num1} e ${num2}, fn(num1, num2))
*/
function MostraResultado (n1, n2) {
    const funcaoSoma = (n1, n2) => n1 + n2
    const funcaoSubtrai = (n1, n2) => n1 - n2
    const funcaoMultiplica = (n1, n2) => n1 * n2    
    const funcaoDivide = (n1, n2) => n1 / n2

    console.log (`[Função Soma] entre ${n1} e ${n2}:`, funcaoSoma (n1, n2))
    console.log(`[Função Subtração] entre ${n1} e ${n2}:`, funcaoSubtrai(n1, n2));
    console.log(`[Função Multiplicação] entre ${n1} e ${n2}:`, funcaoMultiplica(n1, n2));
    console.log(`[Função Divisão] entre ${n1} e ${n2}:`, funcaoDivide(n1, n2));
}

console.log (MostraResultado (20, 2))