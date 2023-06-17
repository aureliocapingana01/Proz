for (let i = 0; i < arrayPostagens.length; i++) {
  // 1 - Cria um Elewmento
  let article = document.createElement("article");

  // 2- Manipular o Elemento
  article.innerHTML = `
  <h3>${arrayPostagens[i].titulo} </h3>
  <p class="subtitulo"> ${arrayPostagens[i].subtitulo} </p>
  <div class="data">${arrayPostagens[1].data} </div>
  <p>${arrayPostagens[i].texto} :</p>
 `;
  article.id = `post-${i + 1}`; // add id

  // 3 - Adicionar o Elemento na Pagina
  let main = document.querySelector("main");
  main.appendChild(article);
}
