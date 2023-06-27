// captura elemento do DOM
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};


// Funcoes atualizar o Dom
const atualizarDOm = () => {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}
atualizarDOm()


// Eventos


// Capture os elementos do botão de adicionar, e da quantidade do produto do DOM
// Crie uma função para adicionar um ao input de número e teste ela "manualmente"
// Utilize a função Number() para fazer conversão do valor dentro da função adicionarUm
// Use o addEventListener no botão de adicionar o comportamento de forma interativa.
// Desafio extra: criar o mesmo procedimento para o botão de subtrair quantidade

let btnAdicionar = document.querySelector("#btn-adicionar-produto-01")
let quantidadeProduto01 = document.getElementById('quantidade-produto-01')

let valorProduto01 = 11.66
// Funcao
const adicionarUm = () => {
  // incrementar a qtdade do produto 
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1

  // incrementar a qtdade do subtotal
  subtotalInfo.quantidade += 1 

  // atualizar o vslor do subtotal 
  subtotalInfo.valor += valorProduto01

  // atualizar o Dom
  atualizarDOm()
}

//  Eventos
btnAdicionar.addEventListener('click', adicionarUm)