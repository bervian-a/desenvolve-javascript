/*LISTA DE TAREFAS - EXERCICIO DE EVENTOS*/


const buttonAddTarefa = document.querySelector('#botaoAdd'); //encontra o botão de curtidas
const listaTarefas = document.getElementById('listaTarefas');
const arrayTarefas = []; //cria lista de  objetos que armazena os nomes e status checkbox

buttonAddTarefa.addEventListener('click', () => { //quando o botão é acionado acontecem varias coisas
    
  //funcao para coletar nome inserido e ajustar frase abaixo da caixa
    const tarefaInsere = document.getElementById ("tarefa"); //encontra o elemento no html
    const tarefainserida = tarefaInsere.value.trim (); //pega o valor inserido e transforma em strg

    if (tarefainserida !== "") { //valor inserido é diferente de vazio
        arrayTarefas.push({texto: tarefainserida, concluida: false}); //add a tarefa na lista
        
        // Atualiza a lista de tarefas no HTML
        listaTarefas.innerHTML = ''; // limpa a lista de tarefas
        
        arrayTarefas.forEach((tarefaObj, index) => {
            const li = document.createElement('li'); //cria nova tarefa em lista
            const ck = document.createElement('input'); //cria input para checkbox
            ck.type = "checkbox"; // add tipo="checkbox" ao input ck
            ck.classList.add('tarefaCheckbox'); // cria uma classe ao aviso para estilização
            
            ck.checked = tarefaObj.concluida;

            if (tarefaObj.concluida) {
                li.classList.add('concluida');
            }
            //estiliza checkbox
            ck.addEventListener('change', () => {
                tarefaObj.concluida = ck.checked;
                if (ck.checked) {
                    li.classList.add('concluida');
                } else {
                    li.classList.remove('concluida');
                }
            });
            
            li.appendChild(ck); // adiciona o checkbox ao item da lista
            li.append(tarefaObj.texto); // adiciona o texto da tarefa ao mesmo item da lista
            listaTarefas.appendChild(li); // adiciona o item na lista
        
        });

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


