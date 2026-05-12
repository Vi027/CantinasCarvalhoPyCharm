<<<<<<< HEAD
/* --- 1. CONFIGURAÇÃO INICIAL E TEMA --- */
const botaoTema = document.getElementById('dark-mode');

document.addEventListener('DOMContentLoaded', () => {
    // 1.1 Checa se já existe um tema salvo
    if (localStorage.getItem('tema') === 'dark') {
        document.body.classList.add('tema-escuro');
        if (botaoTema) botaoTema.checked = true;
    }

    // 1.2 Inicia mostrando "Todos" por padrão
    const btnTodos = document.querySelector('.btn-categoria');
    if (btnTodos) {
        mostrarCategoria(btnTodos, 'todos');
    }
});

// Lógica de trocar o tema
if (botaoTema) {
    botaoTema.addEventListener('change', () => {
        document.body.classList.toggle('tema-escuro');
        const isDark = document.body.classList.contains('tema-escuro');
        localStorage.setItem('tema', isDark ? 'dark' : 'light');
    });
}

/* --- 2. FILTRO DE CATEGORIAS --- */
// Definimos no window para o HTML (onclick) conseguir encontrar a função
window.mostrarCategoria = function(botao, categoriaId) {
    const secoes = document.querySelectorAll('.secao-produtos');
    const botoes = document.querySelectorAll('.btn-categoria');

    // Troca o destaque do botão
    botoes.forEach(b => b.classList.remove('active'));
    botao.classList.add('active');

    // Filtra as seções
    secoes.forEach(secao => {
        const idLimpo = secao.id.replace('secao-', '');

        if (categoriaId === 'todos') {
            secao.style.display = 'block';
        } else {
            secao.style.display = (idLimpo === categoriaId) ? 'block' : 'none';
        }
    });
}

/* --- 3. BOTÃO VOLTAR AO TOPO --- */
const btnSubir = document.getElementById("btnSubir");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        if (btnSubir) btnSubir.style.display = "flex";
    } else {
        if (btnSubir) btnSubir.style.display = "none";
    }
};

window.subirTopo = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
=======
// 1. FUNÇÃO DE FILTRAGEM
function mostrarCategoria(botao, categoriaId) {
    // Seleciona todos os botões e todas as seções
    const botoes = document.querySelectorAll('.btn-categoria');
    const secoes = document.querySelectorAll('.secao-produtos');

    // Remove a classe 'active' de todos os botões e adiciona ao clicado
    botoes.forEach(btn => btn.classList.remove('active'));
    botao.classList.add('active');

    // Lógica para mostrar/esconder as seções
    secoes.forEach(secao => {
        if (categoriaId === 'todos') {
            secao.style.display = 'block'; // Mostra tudo
        } else {
            // Verifica se o ID da seção contém o nome da categoria
            if (secao.id === `secao-${categoriaId}`) {
                secao.style.display = 'block';
            } else {
                secao.style.display = 'none';
            }
        }
    });
}

// 2. MODO ESCURO (DARK MODE)
const botaoTema = document.getElementById('dark-mode');

botaoTema.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');

    // Opcional: Salvar a preferência do usuário no navegador
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('tema', 'dark');
    } else {
        localStorage.setItem('tema', 'light');
    }
});

// Checar tema salvo ao carregar a página
window.onload = () => {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'dark') {
        document.body.classList.add('dark-theme');
        botaoTema.checked = true;
    }
};

// 3. BOTÃO SUBIR AO TOPO
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const btnSubir = document.getElementById("btnSubir");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnSubir.style.display = "block";
    } else {
        btnSubir.style.display = "none";
    }
}

function subirTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rola suavemente
    });
}

// 4. FUNÇÃO DO BOTÃO DO BANNER
function abrirPeloBanner(id) {
    const elemento = document.getElementById(`secao-${id}`);
    const botaoAlmoco = document.querySelector(`button[onclick*="'${id}'"]`);

    if (elemento) {
        mostrarCategoria(botaoAlmoco, id);
        elemento.scrollIntoView({ behavior: 'smooth' });
    }
>>>>>>> 99789860d9d20442084aadbd13a152e21e792331
}