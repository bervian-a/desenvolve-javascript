/*LISTA DE TAREFAS - EXERCICIO DE EVENTOS*/


const buttonAddTarefa = document.querySelector('#botaoAdd'); //encontra o botão de curtidas
const arrayTarefas = []; //cria lista que armazena os nomes

buttonAddTarefa.addEventListener('click', () => { //quando o botão é acionado acontecem varias coisas
    
  //funcao para coletar nome inserido e ajustar frase abaixo da caixa
    const tarefaInsere = document.getElementById ("tarefa"); //encontra o elemento no html
    console.log(tarefaInsere); // Verifique se o campo de texto está sendo corretamente encontrado

    const tarefainserida = tarefaInsere.value.trim (); //pega o valor inserido e transforma em strg

    if (tarefainserida !== "") { //valor inserido é diferente de vazio
        arrayTarefas.push(tarefainserida); //add a tarefa na lista
        
        // Atualiza a lista de tarefas no HTML
        listaTarefas.innerHTML = ''; // limpa a lista de tarefas
        arrayTarefas.forEach(tarefa => {
            const li = document.createElement('li');
            li.textContent = tarefa; // adiciona a descrição da tarefa
            listaTarefas.appendChild(li); // adiciona a tarefa na lista
        });
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

    tarefaInsere.value = '';
});