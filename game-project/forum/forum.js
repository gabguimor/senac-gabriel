document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("box");

  searchBox.addEventListener("focus", () => {
    if (searchBox.value === "Pesquise aqui") {
      searchBox.value = ""; // Apaga o texto padrão
    }
  });

  searchBox.addEventListener("blur", () => {
    if (searchBox.value.trim() === "") {
      searchBox.value = "Pesquise aqui"; // Restaura o texto padrão se estiver vazio
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const heartIcons = document.querySelectorAll(".ph-heart");

  heartIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      if (icon.classList.contains("ph")) {
        icon.classList.remove("ph");
        icon.classList.add("ph-fill");
      } else {
        icon.classList.remove("ph-fill");
        icon.classList.add("ph");
      }
    });
  });
});
