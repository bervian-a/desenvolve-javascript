/*Escreva um código JavaScript para realizar as seguintes manipulações:

alert ("JS ok")

/*FAZER BOTÃO NA PAGINA DE EDIÇÃO DO SITE PARA
Mudar o texto de algum ID.
 */
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


/*Alterar o estilo dos itens da lista.*/
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


/*Adicionar uma classe a todos os parágrafos. */
const adicionaClasseaP = (elemento) => { // inicia a função -elemento=p
    const addClassea = document.getElementsByTagName (elemento); // encontra os elementos <p>
    for (var i = 0; i <addClassea.length; i++){
        addClassea[i].classList.add('nova-classe-paragrafo')    
    };
    }

console.log (adicionaClasseaP ('p'))//chama a função indicando o elemento <p>

/* Alterar o texto do botão.*/
const selecionaBotao = (idBotao, novoTexto) => {
    const botao = document.getElementById (idBotao); //encontra o elemento pelo ID    
    if (botao && botao.tagName === "BUTTON") { // confirmar que o ID é um botão
        botao.innerText = novoTexto //altera o texto do id inidicado
    } else 
        alert (`Este Id ${idBotao} nao existe em nenhum botão`)}; // caso nao encontre o ID ou nao seja botao retorna aviso
    
selecionaBotao ('botao', 'TROCAR TEXTO BOTÃO');