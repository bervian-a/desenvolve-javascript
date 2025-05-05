/*Altere a questão 2 do exercício anterior (Eventos) para armazenar no localStorage a lista de pessoas que clicaram no 
botão Curtir para que elas persistam ao recarregar a página.

Você também deve incluir um botão "Limpar" que remove todos os nomes do localStorage.
*/

const buttonDeixaLike = document.querySelector('#botaoLike'); //encontra o botão de curtidas
const buttonLimpar = document.querySelector('#botaoLimpar'); //botão limpar o storage
const listaLike = document.getElementById("listaLike"); //lista nomes
let listaNomes = JSON.parse(localStorage.getItem('nomeUnico')) || []; // Recupera nomes salvos ou começa com lista vazia

 //Salva nomes no localStorage
const salvarNomes = () => {
    localStorage.setItem('nomeUnico', JSON.stringify(listaNomes));
}

//Função para exibir lista salva
const renderizarNomes = () => {
        if (listaNomes.length === 1) {
            listaLike.innerText = `${listaNomes[0]} curtiu!`
        } else if (listaNomes.length === 2) {
            listaLike.innerText = `${listaNomes[0]} e ${listaNomes[1]} curtiram!`
        } else if (listaNomes.length >= 3) {
            listaLike.innerText = `${listaNomes[0]}, ${listaNomes[1]} e mais ${(listaNomes.length)-2} pessoas curtiram!`
        } else {
            listaLike.innerText = "Ninguém curtiu ainda!";
        };
    };

// Quando a página carrega, renderiza os nomes já salvos
window.addEventListener('load', renderizarNomes);

//função para quando o botão curtir é clicado
buttonDeixaLike.addEventListener('click', () => {

     //COLETAR NOME inserido
     const nomeInserido = document.getElementById ("formNome"); //encontra o elemento no html
     const nomeUnico = nomeInserido.value.trim (); //pega o valor inserido e remove espaços antes e depois
     
     if (nomeUnico !== "") { //valor inserido é diferente de vazio
        if (!listaNomes.includes(nomeUnico)) { //verifica se o nome não esta na lista ainda
            listaNomes.push(nomeUnico); //add nome na lista
            salvarNomes(); //chama função para salvar o nome na storage
            renderizarNomes(); //chama a função renderizar nomes
    
    
            //ALERTA VISUAL nome adicionado a lista
            const alertaCurtida = document.createElement('p'); //cria um p para o aviso 
            alertaCurtida.innerText = "Sua curtida é importante pra nós, obrigada! :) "; //define o texto do alerta
            alertaCurtida.classList.add('alertaCurtida') // cria uma classe ao aviso para estilização
            document.getElementById("secaoLike").appendChild(alertaCurtida); //adiciona o paragrafo na seção com id secaoLike
            setTimeout (() => {
                alertaCurtida.style.opacity = 0; //estilização opacidade antes de desaparecer 
                alertaCurtida.remove(), 500}, 1500); //aviso desaparece suavemente

            nomeInserido.value = ''; // Limpa o campo de escrita
        };
    };
});

//função para quando o botão limpart tudo é clicado
buttonLimpar.addEventListener('click', () => {
    listaNomes = [];
    salvarNomes();
    renderizarNomes();

    const avisoLimpar = document.createElement('p');
    avisoLimpar.innerText = "Lista de curtidas apagada!";
    avisoLimpar.classList.add('avisoLimpar');
    document.getElementById("secaoLike").appendChild(avisoLimpar);
    setTimeout(() => {
        avisoLimpar.style.opacity = 0;
        avisoLimpar.remove();
    }, 1500);
});