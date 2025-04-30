//alert ("JS ok")

/*Exercicio aula 20

//FAZER BOTÃO NA PAGINA DE EDIÇÃO DO SITE PARA
Mudar o texto de algum ID.//
const selecionaId = (elemento) => document.getElementById (elemento) //encontra o elemento       
    
const trocaTitulo = (elemento, novoTitulo) => {
    const alteraTitulo = selecionaId (elemento); //encontra o id indicado
    if (alteraTitulo) { //verifica se o id indicado existe no codigo html para só então retornar a função
        console.log (alteraTitulo)
        alteraTitulo.innerText = novoTitulo; //altera o texto do id inidicado
    } else 
        alert (`Este Id ${alteraTitulo} nao existe`);
}

trocaTitulo ('titulo-principal', 'HATHA YOGA PRA VOCÊ!');


//Alterar o estilo dos itens da lista.//
const alterarEstiloLista = (idLista) => {
    const listaAntiga = document.getElementById (idLista) //selecionar lista antiga
    const paiLista = listaAntiga.parentNode //encontra elemento pai da lista para replace
    const itemLista = `#${idLista} li`; //denomina como nova lista os itens da lista cujo id foi passado
    const selecionaItensLista = document.querySelectorAll (itemLista) //seleciona todos os itens da lista antiga

    const novaLista = document.createElement ("ol"); //cria nova lista
    selecionaItensLista.forEach ((itemLista) => {
        novaLista.appendChild(itemLista) //move os itens para a nova lista
    });

    paiLista.replaceChild(novaLista, listaAntiga) //replace lista antiga por nova
};

alterarEstiloLista ('lista-atributos-yoga') //chama função com id da lista


//Adicionar uma classe a todos os parágrafos. //
const adicionaClasseaP = (elemento) => { // inicia a função -elemento=p
    const addClassea = document.getElementsByTagName (elemento); // encontra os elementos <p>
    for (var i = 0; i <addClassea.length; i++){
        addClassea[i].classList.add('nova-classe-paragrafo')    
    };
    }

console.log (adicionaClasseaP ('p'))//chama a função indicando o elemento <p>

// Alterar o texto do botão.//
const selecionaBotao = (idBotao, novoTexto) => {
    const botao = document.getElementById (idBotao); //encontra o elemento pelo ID    
    if (botao && botao.tagName === "BUTTON") { // confirmar que o ID é um botão
        botao.innerText = novoTexto //altera o texto do id inidicado
    } else 
        alert (`Este Id ${idBotao} nao existe em nenhum botão`)}; // caso nao encontre o ID ou nao seja botao retorna aviso
    
selecionaBotao ('botao', 'TROCAR TEXTO BOTÃO');
*/

/*EXERCICIO AULA 21
Construa uma página HTML com um campo de texto, um botão "Curtir" e um parágrafo que exibe a lista de pessoas que clicaram no botão curtir.

Toda vez que se preencher um nome no campo de texto e clicar em curtir, seu código Javascript deve armazenar o nome em um array (verifique se o nome já está lá) e alterar o parágrafo final da página de acordo com as regras:

- Lista vazia: "Ninguém curtiu"

- 1 pessoa curtiu: "[Nome da pessoa] curtiu"

- 2 pessoas curtiram: "[Pessoa 1] e [Pessoa 2] curtiram"

- 3 ou mais pessoas curtiram: "[Pessoa 1], [Pessoa 2] e mais [tamanho da lista - 2] pessoas curtiram"*/



const buttonDeixaLike = document.querySelector('#botaoLike'); //encontra o botão de curtidas
const listaNomes = []; //cria lista que armazena os nomes

buttonDeixaLike.addEventListener('click', () => {
    //adiciona alerta que botão foi clicado
    const alertaCurtida = document.createElement('p'); //cria um p para o aviso
    alertaCurtida.innerText = "Sua curtida é importante pra nós, obrigada! :) ";
    alertaCurtida.classList.add('alertaCurtida') // cria uma classe ao aviso para estilização
    document.getElementById("secaoLike").appendChild(alertaCurtida); //adiciona o paragrafo na seção com id secaoLike
    
    setTimeout (() => {
        alertaCurtida.style.opacity = 0; //estilização opacidade antes de desaparecer 
        alertaCurtida.remove(), 500}, 1500); //aviso desaparece suavemente

  //funcao para coletar nome inserido e ajustar frase abaixo da caixa
    const nomeInserido = document.getElementById ("formNome"); //encontra o elemento no html
    const nomeUnico = nomeInserido.value.trim (); //pega o valor inserido e remove espaços antes e depois
    const listaLike = document.getElementById ("listaLike")

    if (nomeUnico !== "") { //valor inserido é diferente de vazio
        if (!listaNomes.includes(nomeUnico)) { //verifica se o nome não esta na lista ainda
            listaNomes.push(nomeUnico);
            if (listaNomes.length === 1) {
                listaLike.innerText = `${nomeUnico} curtiu!`
            } else if (listaNomes.length === 2) {
                listaLike.innerText = `${listaNomes[0]} e ${listaNomes[1]} curtiram!`
            } else if (listaNomes.length >= 3) {
                listaLike.innerText = `${listaNomes[0]}, ${listaNomes[1]} e mais ${(listaNomes.length)-2} pessoas curtiram!`
            } else
            console.log ("Ocorreu algum erro!")
        } else 
            console.log ("Nome já inserido!")
    }
});