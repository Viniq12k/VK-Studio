/* ============================== */
/* Filtro de Serviços */
/* ============================== */

document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os botões de filtro
  const filtroButtons = document.querySelectorAll(".filtroButton");
  // Seleciona todos os cards de serviços
  const cards = document.querySelectorAll(".card");

  // Adiciona event listener para cada botão
  filtroButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove a classe 'ativo' de todos os botões
      filtroButtons.forEach((btn) => btn.classList.remove("ativo"));
      // Adiciona a classe 'ativo' ao botão clicado
      this.classList.add("ativo");

      // Obtém o filtro selecionado
      const filtroSelecionado = this.getAttribute("data-filtro");

      // Filtra os cards
      cards.forEach((card) => {
        if (filtroSelecionado === "todos") {
          // Se for 'todos', mostra todos os cards
          card.classList.remove("hide");
        } else {
          // Compara a categoria do card com o filtro selecionado
          const categorialCard = card.getAttribute("data-categoria");
          if (categorialCard === filtroSelecionado) {
            card.classList.remove("hide");
          } else {
            card.classList.add("hide");
          }
        }
      });
    });
  });
});
