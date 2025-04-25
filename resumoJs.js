/*VARIAVEIS*/
//var tem função global e pode ser alterada, pode começar sem atribuição inicial (será undefined)//
var idade = 25 //variavel do tipo number inteiro//
var semValorDefinido //variavel do tipo undefined//

//let é uma variavel limitada ao escopo, são definidas e podem ser alteradas//
let nome = "Joao" //variavel do tipo string//
let estaChovendo = true // variavel do tipo boolean//
let semValorDefinido //variavel do tipo undefined//
let y = null //ausencia intencional de qualquer valor ou objeto//
let pessoa = {nome: "joão", idade: 30, casada: false}; //object: coleção de propriedades, cada qual com nome e valor//
let frutas = {'maça', 'banana', 'pera'}; //array: coleção ordenada de elementos - podem ser de diferentes tipos//

//const é uma variavel limitada ao escopo e não pode ser alterada//
const PI = 3.14 //variavel do tipo number decimal//

function soma(a,b) { //função: bloco de codigo que pode ser executado para retornar valores//
    return a+b //return: é o valor que será resgatado de dentro da função
};

//Symbol: Representa um valor único e imutável que pode ser usado como chave de uma propriedade de objeto. 
// É utilizado principalmente em programação avançada.//

/*FUNCOES*/
function nomeDaFuncao(parametro1,parametro2) {  //() para argumentos e {} para o bloco de codigo
    //intruções da função
};
const nomeDaFuncao(argumento1,argumento2) //chamada da função acima: argumentos sao valores reais que serão utilizados para preencher os parametros da função

addEventListener ("click", function () { //funções anonimas: autoexecutáveis, geralmente utilizadas como argumentos para outras funções ou callbacks.
    //Arrow functions são anonimas, chamadas atraves do nome da variavel atribuida a ela
    //intruções da função anônima
});

const arrowFunction = (argumento1,argumento2) => {  //utiliza seta (=>) para separar os argumentos do bloco de codigo//
    //intruções da função
};
//ARROW FUNCTIONS: 
//- Omitir parenteses () quando há 1 unico argumento;
//- Omitir chaves {} quando há apenas 1 instrução;
//- Omitir 'return' quando a expressão é calculo simples.

//FUNÇÕES DE CALLBACK/ CALBACKS// são funcoes que chamam funcoes
function carregarDados (url, callback) {
    fetch (url)
        .then (responses => responses.json ())
        .then (data => callback (data))
        .catch (error => console.error (error));
};
function exibirDados (dados) {
    console.log (dados);
};
carregarDados ('https.://exemplo.com/dados.json', exibirDados);

//CONDICIONAIS//
if (idade>= 18) { //se a condição for verdadeira, ele executa; else é opcional e executa se if for false//
    console.log ("você é maior de idade");
}else if (>=16) {
    console.log ("você é quase maior de idade, falta só 2 anos");

}else {
    console.log ("você é menor de idade");
}

switch (fruta) { //compara o valor a diferentes casos e executa o bloco correspondete; utilizada quando ha varias condições a serem verificadas
    case "maçã":
        console.log ("você escolheu maça");
        break; //quebra a verificação, não segue para as proximas
    case "banana":
        console.log ("você escolheu banana");
        break;
    default:
        console.log ("você não escolheu uma opção valida");
}

const resultado = idade >= 18 ? "Maior de idade" : "Menor de idade": //operador ternário: retorna um valor se a condição for verdadeira e outro se for falsa; forma resumida da função if
console.log (resultado(19)); //imprime maior de idade

//ARRAYS// são listas de valores. Dados podem ser de tipos diferentes (geralmente sao do mesmo tipo)
//existem 2 formas de declarar arrays - literal e construtor:
const frutas = ['maça', 'banana', 'laranja']
const numeros = [1, 2, 4];
const estudante = [
    {nome: 'joao' , idade: 15}
    {nome: 'maria' , idade: 18}
]
//MANIPULAÇÃO DE ARRAYS//
console.log (frutas[0]); //exibe maçã//chamada por index
frutas.push (pera); //adiciona itens no fim da lista
frutas.unshift (tomate); //adiciona itens no inicio da lista
frutas.pop (); //remove último item
frutas.shift (); //remove primeiro item

/* SPLICE Array.splice(inicio, qtdItensDeletar) - retorna novo array com itens excluidos e MODIFICA array original*/
const frutas = ['maça', 'banana', 'laranja', 'pera']
console.log (frutas.splice(2)) //retorna [laranja, pera]
console.log (frutas) //retorna [maca, banana]

/* SLICE Array.splice(inicio, final) - NÃO modifica  array original e cria novo com elementos selecionados*/
const frutas = ['maça', 'banana', 'laranja', 'pera']
console.log (frutas.slice(2)) //retorna iniciando no i2, com i2 [laranja, pera]
console.log (frutas) //retorna ['maça', 'banana', 'laranja', 'pera']

console.log (frutas.slice(0,2)) //retorna do i0 ao i2, sem o i2 ['maça', 'banana']
console.log (frutas) //retorna ['maça', 'banana', 'laranja', 'pera']
console.log (frutas.slice(-2)) //retorna i2 ultimos ['laranja', 'pera']

/* JOIN - adiciona um separador como paramentro, unindo os elementos tornando-o em string)*/
console.log (frutas.join("//")) //retorna 'maça'//'banana'//'laranja'//'pera'

/* SORT & REVERSE - ordena de forma crescente/decrescente os elementos do array*/
console.log (frutas.sort())  //retorna ['banana', 'laranja', 'maça', 'pera']
console.log (frutas.reverse())  //retorna ['pera', 'maça', 'laranja', 'banana']

/* FIND - busca um numero de acordo com a regra estabelecida*/
console.log (numeros.sort().find (e=> e > 50)) //sem o .sort retorna o primeiro numero >50 da lista; com o .sort retornará o valor mais proximo maior que 50.

/* AT e IDEXOF - retorna o elemento do indice informado ou o indice do elemento informado (-1 se não encontrar)*/
console.log (frutas.at(1)) //retorna banana
console.log (frutas.indexOf(maça)) //retorna 0

/* CLASSES - class (palavra reservada) - forma organizada de estruturar e agrupar codigo*/
const nome = "josé Ferreira";
console.log (nome.length); //retorna 13 (contabiliza o espaço entre os nomes)
console.log (nome.toUpperCase()) // retorna JOSÉ FERREIRA
const nome = new String("José Ferreira") //funciona igual ao exemplo acima

class produto { //classe onde as caracteristicas dos produtors são as propriedades e as ações referentes a eles são os métodos
    constructor (nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    apresentarDetalhes () {
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Categoria: ${this.categoria}`);
    }

    calculaImposto (taxaImposto) {
        return this.preco * (taxaImposto/100);
    }

    adicionaDesconto (valorDesconto) {
        this.preco -= valorDesconto;
    }
}
//para usar a nova classe,, atribuimos uma variavel acompanhada da palavra reservada new:
const produtoNovo = new produto ("Lápis", 2.99, "Papelaria") //adiciona o produto lapis

produtoNovo.apresentarDetalhes (); //exibe: Nome: Lápis |Preço: R$ 2.99 |Categoria : Papelaria

/* Classe OBJECT para tipo de dado object > Tipo de dado Object é aquele que pode ser atribuido utilizando {} e possui relação chave/valor*/
const produtoNovo = new Produto (1, "caneta", 4.99, "papelaria"); //instanciando de forma construtor
const produtoEstoque = {
    id: 1,
    quantidade: 495
} // instanciando de forma Literal

//Acessando valores do object
console.log (produtoNovo); //Exibe {id: 1, nome: "caneta", preco: 4.99, categoria: "papelaria"}
console.log (produtoEstoque.id); //Exibe 1

/* LACO FOR & FOR OF & FOR IN - CONDICAO EXECUTADA PARA CADA NUMERO ESPECIFICADO DE VEZES*/
for (inicializacao; condicao; incremento) {//codigo executado
    }
for (let i=0; i>5; i++) {
    console.log(i); //imprime 0,1,2,3,4
     }

for (elemento of colecao) {}
const frutas = ['maça', 'banana', 'laranja', 'pera']
for (fruta of frutas) {
    console.log(fruta); //exibe: 'maça', 'banana', 'laranja', 'pera' --> pra cada fruta no array de frutas, vai imprimir o valor fruta.
}

for (propriedade in objeto) {}
const fruta = {
    nome: 'maça',
    cor: 'vermelha',
    tipo: 'gala'};
for (const propriedade in fruta) {
    console.log(propriedade, fruta[propriedade]); //exibe: "nome maça", "cor: vermelha", "tipo: gala" --> pra cada propriedade de fruta no objeto, vai imprimir a propriedade e o valor da propriedade.
}

/* LACO WHILE & DO-WHILE - CONDICAO EXECUTADA ATÉ QUE DETERMINADA CONDICAO SEJA TRUE*/
while (condicao) {}
let i = 0 //acho que geralmente define primeiro o valor inicial da condição, senão nao executa
 while (i < 5) {
    console.log (i); //imprime i e repete o laço: 0, 1 ,2,3,4
    i++; //adiciona 1 cada vez que o laço repetir
 }

//Executa pelo menos uma vez o codigo antes de verificar a condição
do { //codigo a ser executado 
} while (condicao);

let i = 1
do {
    console.log (i); //imprime 1
    i++; 
    } while (i<1) //mesmo qe não atende a essa condição

/* DATAS - classe Date*/
//só pode ser criada atraves de construtor
const dataAtual = new Date ();
console.log (dataAtual); //exibe data e hora atual completo

//TEMPORIZADORES TIMERS
setTimeout (() => {
    console.log ("Mensagem exibida após 2 segundos");
}, 2000); 

setInterval(() => {
    console.log ("Mensagem exibida a cada 2 segundos");
}, 2000); //repete a função em intervalo definido em milissegundos

//ZERANDO CRONOMETROS//
clearInterval (idIntervalo)
clearTimeout (idIntervalo)

function mostrarContagem () {
    let contador = 0;
    console.log("Contagem:" , contador++);
};
const idIntervalo = setInterval (mostrarContagem, 1000); //executa mostrarContagem a cada 1 segundo
console.log ("Temporizador iniciado");
setTimeout(() => {
    clearInterval (idIntervalo);
    console.log ("Temporizados cancelado após 5 secs");
}, 5000);

/*Exemplo da aula:*//
function chamar (secsAtraso) {
    console.log (`Atrasou ${secsAtraso} segundos (funçaõ 1)`)
};

function chamaAtrasado (funcaoDeAtraso, quantidadeAtraso) { //timeout serve para atrasar a chamada de uma função//
    setTimeout (() => funcaoDeAtraso (quantidadeAtraso), quantidadeAtraso *1000)  // DATA TRABALHA em milissegundos, por isso multiplica por 1.000//
};

chamaAtrasado (chamar, 2)

function chamarIntervalo (funcaoIntervalada, intervalo) { 
    setInterval(() => funcaoIntervalada(intervalo), intervalo*1000); //repete a função em intervalo definido em milissegundos
};

chamarIntervalo (chamar, 5)