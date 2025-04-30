alert ("JS está ok!") //Verificação de funcionamento do JS


/*COMO SELECIONAR ELEMENTOS*/
const header = document.querySelector('header') //seletor de busca de elementos
console.log (header)

const verificaSeElementoExiste = (seletor) => {
    const elemento = document.querySelector (seletor)
    if (elemento) alert ('Elemento existe');
    else alert ('Elemento nao existe');
}
//verificaSeElementoExiste ('pop') //Class >> .paragrafo (conotação=CSS) | button#button (id >> #)

const contaElementos = (seletor) => {
    if (verificaSeElementoExiste) {
        const TodosElementos = document.querySelectorAll (seletor) //verifica e retorna todos do documento (all) equanto o outro retorna o primeiro
        console.log (`Existem ${TodosElementos.length} elementos com o seletor ${seletor}`)
    } else 
    alert (`Elemento ${seletor} nao existe`);
}

contaElementos ('li.menu-item')

/*OUTRA FORMA DE SELECIONAR ELEMENTOS 
+++ MAIS USADA,MAIS CLEAN*/
const elemento = document.getElementsByTagName ('span')
console.log (elemento)

// getElementeBy ID (neste caso não precisa marcar com #), by Class (não precisa marcar com .)

const selecionaTag = (elemento) => document.getElementsByTagName (elemento)
const selecionaId = (elemento) => document.getElementsById (elemento)
const selecionaClasse = (elemento) => document.getElementsByClassName (elemento)
const selecionaNome = (elemento) => document.getElementsByName (elemento).length

const tituloH1 = SelectionTag ('h1');
tituloH1 [0].innerText = 'Mudou título';
