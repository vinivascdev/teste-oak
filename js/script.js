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

formularioProduto.addEventListener('submit', (e) => {
  e.preventDefault();
  cadastrarProdutos();
});

function cadastrarProdutos() {
  let nome = document.getElementById('nome-produto').value;
  let descricao = document.getElementById('descricao-produto').value;
  let valor = parseFloat(
      document.getElementById('valor-produto').value
          .replace('.', '')
          .replace(',', '.')
  );
  let disponibilidade = document.querySelector('input[name="disponibilidade-produto"]:checked').value;

  if (valor <= 0 || isNaN(valor)) {
    alert('O valor do produto deve ser maior que zero!');
    return;
}

  produtos.push({ nome, descricao, valor, disponibilidade });

  atualizarListaProdutos();

  mostrarLista();

  formularioProduto.reset();
}

function atualizarListaProdutos() {
  produtos.sort((a, b) => a.valor - b.valor);

  listaProdutos.innerHTML = '';
  produtos.forEach(produto => {
      const linha = document.createElement('tr');
      linha.innerHTML = `<td>${produto.nome}</td><td>${produto.descricao}</td><td>${produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td><td>${produto.disponibilidade}</td>`;
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