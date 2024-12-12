document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".dropdown-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const content = this.parentElement.nextElementSibling; // Obtem o conteúdo do dropdown
      const icon = this.querySelector("i");

      // Alterna a classe .active no conteúdo
      content.classList.toggle("active");

      // Alterna o ícone
      if (content.classList.contains("active")) {
        icon.classList.remove("ph-caret-down");
        icon.classList.add("ph-caret-up");
        icon.style.color = "var(--brand-color)"; // Adiciona a cor verde
      } else {
        icon.classList.remove("ph-caret-up");
        icon.classList.add("ph-caret-down");
        icon.style.color = ""; // Remove a cor verde
      }
    });
  });
});
