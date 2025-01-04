document.getElementById('valor-produto').addEventListener('input', function (e) {
    let valor = e.target.value.replace(/\D/g, '');
    valor = (valor / 100).toFixed(2);
    valor = valor.replace('.', ',');
    valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    e.target.value = valor;
});

let formContainer = document.querySelector('.form-corpo');
let formularioProduto = document.querySelector('form');
let listaContainer = document.getElementById('lista-container');
let listaProdutos = document.getElementById('lista-produtos');
let botaoNovosProdutos = document.getElementById('novo-produto');

let produtos = [];

function cadastrarProdutos(){
    let nome = document.getElementById('nome-produto').value;
    let descricao = document.getElementById('descricao-produto').value;
    let valor = document.getElementById('valor-produto').value;
    let disponibilidade = document.querySelector('input[name="disponibilidade-produto"]:checked').value;

    produtos.push({nome, descricao, valor, disponibilidade});

    produtos.sort((a, b) => a.valor - b.valor);

    atualizarListaProdutos();

    mostrarLista();

    formularioProduto.reset();
}

function atualizarListaProdutos() {
  listaProdutos.innerHTML = '';
  produtos.forEach(produto => {
    const linha = document.createElement('tr');
    linha.innerHTML = `<td>${produto.nome}</td><td>${produto.descricao}</td><td>${produto.valor}</td><td>${produto.disponibilidade}</td>`;
    listaProdutos.appendChild(linha);
  });
}

function mostrarLista(){
    listaContainer.classList.remove('hidden');
    formContainer.classList.add('hidden');
}

function mostrarFormulario(){
    formContainer.classList.remove('hidden');
    listaContainer.classList.add('hidden');
}