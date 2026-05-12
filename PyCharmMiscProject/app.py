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
    app.run(debug=True)