/*Crie uma aplicação web que possua um campo de busca e pesquise usuários da API no GitHub (https://api.github.com/) 
e exiba os dados em uma lista. Caso não encontre, exiba "Não foram encontrados usuários para esta pesquisa". 
A busca na API deve iniciar com o clique no botão.*/


const botaoPesquisar = document.getElementById ('botaoPesquisar')

botaoPesquisar.addEventListener ('click', async function (){
    const inputUsuario = document.getElementById ('usuario').value.trim();
    const lista = document.querySelector ('.listaUsuarios');
    const mensagemVazia = document.getElementById('mensagem-vazia');

    lista.innerHTML = ''; // Limpa a lista antes da nova busca

    if (inputUsuario === '') {
            lista.innerHTML = '<li>Por favor, digite um nome de usuário.</li>';
            return;
        };

    try {
    const response = await fetch(`https://api.github.com/search/users?q=${inputUsuario}`); //busca os usuarios na api do git
        
    if (!response.ok) {
        throw new Error('Usuário não encontrado'); //exibe erro caso não encontre (diferente de ok==200)
    };

    const data = await response.json(); //se encontrar, transforma os dados para que js carregue

    if (data.total_count === 0) {
        lista.innerHTML = '<li>Não foram encontrados usuários para esta pesquisa.</li>';
        return;
    }
    data.items.forEach(user => { //para cada usuario encontrado com as correspondentes da pesquisa, ele retornará um item na lista
        const item = document.createElement('li'); //cria um item lista com alguns dados do user: avatar, nome, link
            item.innerHTML = `
                <img src="${user.avatar_url}" alt="Avatar" width="50" style="vertical-align: middle; border-radius: 50%;" />
                <strong>${user.login}</strong> - <a href="${user.html_url}" target="_blank">Ver perfil</a>`;
            lista.appendChild(item);
    });

    } catch (error) { //exibe erro caso não encontre
        lista.innerHTML = '<li>Não foram encontrados usuários para esta pesquisa.</li>';
    }
});