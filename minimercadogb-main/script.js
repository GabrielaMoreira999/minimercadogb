window.onload = function () {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    mostrarCarrinho();
  }

  function mostrarCarrinho() {
    const lista = document.getElementById("carrinho");
    lista.innerHTML = "";

    carrinho.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
      lista.appendChild(li);
    });
  }

  mostrarCarrinho();

  // Permite que o botão do HTML acesse essa função
  window.adicionarAoCarrinho = adicionarAoCarrinho;
};

