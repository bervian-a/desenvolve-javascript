/*ARRAY DE POSTS*/
let feed = [];

// Função para buscar uma imagem de gatinho aleatória da API
const getCatImage = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return data[0].url;  // Retorna a URL da imagem do gatinho
};

// Função para renderizar o feed de postagens
const renderFeed = () => {
    const listaPost = document.getElementById('lista-post');
    listaPost.innerHTML = ''; // Limpa a lista antes de renderizar novamente

    // Ordena as postagens pela data (mais recente para a mais antiga)
    feed.sort((a, b) => new Date(b.data) - new Date(a.data));

    // Cria cada item de postagem
    feed.forEach(post => {
        const li = document.createElement('li');
        li.classList.add('postagem');

        // Criando a estrutura da postagem
        const avatarImg = document.createElement('img');
        avatarImg.src = post.avatar;
        avatarImg.alt = `${post.nome} Avatar`;
        avatarImg.classList.add('avatar');

        const nome = document.createElement('h3');
        nome.innerText = post.nome;

        const textoPost = document.createElement('p');
        textoPost.innerText = post.texto;

        const imagemGatinho = document.createElement('img');
        imagemGatinho.src = post.imagemGatinho;
        imagemGatinho.alt = 'Imagem de um gatinho fofo';
        imagemGatinho.classList.add('imagem-gatinho');

        const divLikes = document.createElement('div');
        divLikes.classList.add('likes');
        const likeButton = document.createElement('button');
        likeButton.innerText = `Curtir (${post.likes})`;
        likeButton.addEventListener('click', () => {
            post.likes++;
            renderFeed(); // Re-renderiza o feed para mostrar o novo número de likes
        });

        divLikes.appendChild(likeButton);

        // Adiciona tudo dentro do <li>
        li.appendChild(avatarImg);
        li.appendChild(nome);
        li.appendChild(textoPost);
        li.appendChild(imagemGatinho);
        li.appendChild(divLikes);

        // Adiciona o <li> à lista de postagens
        listaPost.appendChild(li);
    });
};

// Função para enviar uma nova postagem
const enviarPostagem = async (event) => {
    event.preventDefault();
    const textarea = document.querySelector('textarea');
    const texto = textarea.value.trim();

    if (texto) {
        const novaPostagem = {
            data: new Date().toISOString(),
            nome: 'Yogi Usuário', // Nome fixo, pode ser alterado para o nome do usuário real
            avatar: 'https://www.w3schools.com/w3images/avatar2.png', // Avatar fixo
            texto: texto,
            imagemGatinho: await getCatImage(), // Imagem do gatinho da API
            likes: 0
        };

        // Adiciona a nova postagem ao array e renderiza novamente
        feed.unshift(novaPostagem); // Adiciona a nova postagem no começo para ser a mais recente
        renderFeed();
    }

    // Limpa o campo de texto
    textarea.value = '';
};

// Event listener para o formulário
document.getElementById('postForm').addEventListener('submit', enviarPostagem);

// Chama a função de renderização inicial
renderFeed();