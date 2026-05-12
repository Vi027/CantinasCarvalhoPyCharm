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
}