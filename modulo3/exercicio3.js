/*Exercício 3 - GITHUB
Crie um sistema simples para gerenciar o estoque de uma livraria. 
O sistema permite visualizar, adicionar e remover livros do estoque e atualizar a quantidade de livros no estoque.

/*Array de objetos com infos dos livros*/

const livrosEstoque = [
    {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        quantidade: 15
      },
      {
        titulo: "1984",
        autor: "George Orwell",
        quantidade: 20
      },
      {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        quantidade: 40
      }
]

const readline = require("readline");
const opcaoMenu = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu () { //função menu - redireciona para as demais funções e solicita as entradas//
    console.log ("Seja bem vindo ao sistema da Livraria LeMais.")
    opcaoMenu.question("Digite o numero da opção desejada:\n1 - Visualizar o estoque de livros\n2 - Adicionar um novo livro\n3 - Remover algum livro do estoque\n4 - Ajustar a quantidade de algum livro no estoque\n0 - Para sair do menu\n", (resposta) => {
    if (resposta === "1") { //vai para função listar livros//
        listarLivros (livrosEstoque);

    } else if (resposta === "2") { //vai para função adicionar livro//
        opcaoMenu.question ("Digite o título:\n", (tituloNovo) => {
            opcaoMenu.question ("Digite o autor:\n", (autorNovo) => { 
                opcaoMenu.question ("Digite a quantidade:\n", (quantNovo) => {
                    adicionarLivro (tituloNovo, autorNovo, Number(quantNovo));
                    mostrarMenu(); 
                });
            });
        });

    } else if (resposta === "3") { //vai para função remover livro//
        opcaoMenu.question ("Digite o título do livro a ser removido do estoque:\n", (tituloRemover) => {
            removerLivro (tituloRemover);
            mostrarMenu();
        });

    } else if (resposta === "4") {//vai para função editar quantidade de livro//
        opcaoMenu.question ("Digite o título do livro a ser editado:\n", (tituloEditar) => {
            opcaoMenu.question ("Digite a quantidade atualizada:\n", (quantEditar) => {
                atualizarQuantidade (tituloEditar, Number(quantEditar));
            });
        });

    } else if (resposta === "0") {   //sai do programa//
      console.log("Saindo do programa...");
      opcaoMenu.close();

    } else { //caso seja digitada resposta diferente as opções//
      console.log("❌ Opção inválida. Tente novamente:\n");
      mostrarMenu();
    };
    });
};

//1 - Lista todos os livros no estoque://
function listarLivros () { //gera função apenas para fins do exercicio//
        console.log ("Livros disponiveis em estoque:");
        console.log (livrosEstoque);
        console.log ("---------- fim da função listagem ----------\n");
        mostrarMenu ();
}

//2- Adiciona um novo livro ao estoque://

function adicionarLivro (tituloNovo, autorNovo, quantNovo) {
    const existe = livrosEstoque.find ((livro) => livro.titulo === tituloNovo);
    if (existe) {
            console.log ("❗ Livro já existe.❗\n Atualize a quantidade - opção 3 do menu.\n");
            mostrarMenu ();
    }else{
        livrosEstoque.push ({titulo: tituloNovo, autor: autorNovo, quantidade: quantNovo})
        console.log (`Novo livro adicionado:\n | Título: ${tituloNovo}\n | Autor: ${autorNovo}\n | Quantidade: ${quantNovo}`);
        console.log ("---------- fim da função adição ----------\n");
        mostrarMenu ();
}};

//3- Remove um livro do estoque (título)://

function removerLivro (tituloRemover) {
    const index = livrosEstoque.findIndex(livro => livro.titulo === tituloRemover);

    if (index !== -1) {
        const livroRemover = livrosEstoque.splice (index, 1) [0];
        console.log (`Livro "" ${tituloRemover} "" removido do estoque`);
        console.log ("---------- fim da função remoção ----------\n");
        mostrarMenu ();
    } else {
        console.log (" ❌ Livro não encontrado! ❌\nVerifique o título e tente novamente.\n");
        mostrarMenu ();
}};

//4- Atualiza a quantidade de um livro no estoque (titulo, quantidade nova)//
//encontra o objeto, pelo index, altera o valor quantidade do item com titulo tal//
function atualizarQuantidade(tituloEditar, novaQuantidade) {
    const livro = livrosEstoque.find (livro => livro.titulo === tituloEditar);
    if (livro) {
        livro.quantidade = novaQuantidade
        console.log (`Estoque de "" ${tituloEditar} "" atualizado para "" ${novaQuantidade} ""`);
        console.log ("---------- fim da função atualização ----------\n");
        mostrarMenu ();
    } else {
        console.log ("❌ Livro não encontrado❌\nVerifique o titulo e tente novamente\n");
        mostrarMenu ();
}};

mostrarMenu();