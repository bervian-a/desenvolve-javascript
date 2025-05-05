/*LISTA DE TAREFAS - EXERCICIO DE EVENTOS*/
/*Altere a questão 3 do exercício anterior (Eventos) para que as tarefas (com descrição e status) sejam armazenadas no localStorage e 
persistam ao recarregar a página.

Ao lado de cada tarefa crie um botão para excluir essa tarefa da lista (e portanto do localStorage).*/


const buttonAddTarefa = document.querySelector('#botaoAdd'); //encontra o botão de curtidas
const listaTarefas = document.getElementById('listaTarefas');

/*como agora quero iniciar do storage, substituo essa linha
const arrayTarefas = []; //cria lista de  objetos que armazena os nomes e status checkbox
*/
let arrayTarefas = JSON.parse(localStorage.getItem('tarefaSalva')) || []; // Recupera tarefas salvas ou começa com lista vazia

const salvarTarefas = () => {
    localStorage.setItem('tarefaSalva', JSON.stringify(arrayTarefas));
} // Função para salvar tarefas no localStorage

//Função para exibir lista salva (ou vazia) na tela:
const renderizarTarefas = () => {
    listaTarefas.innerHTML = ''; // Limpa a lista atual
    arrayTarefas.forEach((tarefaObj, index) => { //laço: para cada tarefa adicionada
        const li = document.createElement('li'); //cria elemento li
        const ck = document.createElement('input'); //cria checkbox
        ck.type = 'checkbox';
        ck.classList.add('tarefaCheckbox');
        ck.checked = tarefaObj.concluida;

        if (tarefaObj.concluida) {
            li.classList.add('concluida'); //adiciona classe 'concluida' caso o checkbox esteja selecionado.
        }

        ck.addEventListener('change', () => { //função que faz a troca de concluida e nao concluida de acordo com o checkbox.
            tarefaObj.concluida = ck.checked;
            salvarTarefas();
            renderizarTarefas();
        });

        // Botão de excluir
        const botaoExcluir = document.createElement('button'); //cria botao para remover tarefa (lista e storage)
        botaoExcluir.textContent = '🗑️'; //ux: cria icone/botao
        botaoExcluir.classList.add('botaoExcluir');
        botaoExcluir.addEventListener('click', () => {
            arrayTarefas.splice(index, 1); //remove tarefa quando lixexira for clicada
            salvarTarefas();
            renderizarTarefas();
        });

        
        //adiciona os 3 itens dentro de uma mesma tarefa
       // li.appendChild(ck);
        
        const spanTexto = document.createElement('span');
        spanTexto.innerText = tarefaObj.texto;
        spanTexto.style.marginRight = '10px'; // adiciona espaço entre o texto e a lixeira

        li.appendChild(ck);
        li.appendChild(spanTexto);
        li.appendChild(botaoExcluir);

        //li.append(tarefaObj.texto);
        //li.appendChild(botaoExcluir);
        listaTarefas.appendChild(li); //adiciona o conjunto dentro da lista
    });
}


//Função para quando o botão de adicionar a tarefa é clicado:
buttonAddTarefa.addEventListener('click', () => {

  //coleta o texto inserido na caixa de input
    const tarefaInsere = document.getElementById ("tarefa"); //encontra o elemento no html
    const tarefainserida = tarefaInsere.value.trim (); //pega o valor inserido e transforma em strg

    //Função que vai adicionar o texto à lista, desde que seja diferente de vazio
    if (tarefainserida !== "") {
       arrayTarefas.push({texto: tarefainserida, concluida: false}); //add a tarefa na lista
       salvarTarefas();
       renderizarTarefas();

       tarefaInsere.value = ''; //limpa a caixa de texto

        //adiciona alerta que tarefa foi adicionada
        const tarefaAdd = document.createElement('p'); //cria um p para o aviso
            tarefaAdd.innerText = "Tarefa adicionada com sucesso!";
            tarefaAdd.classList.add('avisoTarefa') // cria uma classe ao aviso para estilização
            document.getElementById("principal").appendChild(tarefaAdd); //adiciona o paragrafo na seção com id inicio
        
        setTimeout (() => {
            tarefaAdd.style.opacity = 0; //estilização opacidade antes de desaparecer 
            tarefaAdd.remove(), 500}, 1500); //aviso desaparece suavemente
            

    } else {
            const tarefaVazia = document.createElement('p'); //cria um p para o aviso vazio
            tarefaVazia.innerText = "Tarefa vazia, nada adicionado!";
            tarefaVazia.classList.add('avisoTarefaVazio') // cria uma classe ao aviso para estilização;
            document.getElementById("principal").appendChild(tarefaVazia); //adiciona o paragrafo na seção com id inicio
            setTimeout (() => {
                tarefaVazia.style.opacity = 0; //estilização opacidade antes de desaparecer 
                tarefaVazia.remove(), 500}, 1500); //aviso desaparece suavemente
            }

});

window.addEventListener('load', () => {
    renderizarTarefas();
});

