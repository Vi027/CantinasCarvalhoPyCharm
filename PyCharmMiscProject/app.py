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
    app.run(debug=True)