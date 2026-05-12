<<<<<<< HEAD
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    categorias = [
        {'id': 'todos', 'nome': 'Todos'},
        {'id': 'lanches', 'nome': 'Lanches'},
        {'id': 'almoco', 'nome': 'Almoço'},
        {'id': 'bebidas', 'nome': 'Bebidas'},
        {'id': 'sobremesas', 'nome': 'Sobremesas'},
        {'id': 'doces', 'nome': 'Doces'}
    ]

    produtos = [
        {
            'nome': 'Hambúrguer Clássico',
            'desc': 'Pão, carne 160g, queijo e maionese.',
            'preco': 'R$25,90',
            'categoria': 'lanches',
            'imagem': 'lanche.png'
        },
        {
            'nome': 'Prato Executivo',
            'desc': 'Arroz, feijão, carne e salada.',
            'preco': 'R$32,00',
            'categoria': 'almoco',
            'imagem': 'foto-almoco-1.webp'
        },
        {
            'nome': 'Coca-Cola',
            'desc': 'Lata 350ml bem gelada.',
            'preco': 'R$6,50',
            'categoria': 'bebidas',
            'imagem': 'bebida.png'
        }
    ]
    return render_template('index.html', categorias=categorias, produtos=produtos)


if __name__ == '__main__':
=======
from flask import app, render_template, Flask

app = Flask(__name__)


@app.route('/')
def index():
    # O gerente vai na pasta 'templates' e entrega o arquivo index.html
    return render_template('index.html')

@app.route('/cardapio')
def cardapio():
    # Lista de categorias para os botões
    categorias = [
        {'id': 'todos', 'nome': 'Todos'},
        {'id': 'almoco', 'nome': 'Almoço'},
        {'id': 'bebidas', 'nome': 'Bebidas'},
        {'id': 'doces', 'nome': 'Doces'}
    ]

    # Exemplo de como seus produtos poderiam vir de um banco de dados
    produtos = [
        {'nome': 'Executivo de Frango', 'preco': '28,90', 'desc': 'Frango grelhado e acompanhamentos.',
         'categoria': 'almoco', 'imagem': 'foto-almoco-1.webp'},
        {'nome': 'Suco de Laranja', 'preco': '12,00', 'desc': 'Suco natural 500ml.', 'categoria': 'bebidas',
         'imagem': 'foto-bebida-1.jpg'},
    ]

    return render_template('cardapio.html', categorias=categorias, produtos=produtos)

# Liga o servidor
if __name__ == '__main__':
>>>>>>> 99789860d9d20442084aadbd13a152e21e792331
    app.run(debug=True)