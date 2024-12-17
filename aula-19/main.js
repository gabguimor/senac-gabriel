/* fetch products */

/*  async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    renderProducts(data.products);
  } catch (error) {
    console.error("Erro ao buscar os produtos: ", error);
  }
}


async function fetchProducts() {
  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ json: () => mockProducts });
      }, 1000); // 1 segundo
    });
    const data = await response.json();

    renderProducts(data);
  } catch (error) {
    console.error("Erro ao buscar os produtos: ", error);
  }
}

function renderProducts(products) {
  const productGrid = document.querySelector(".product-grid");
  productGrid.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <div class="product-img">
        <img
          src="${product.thumbnail || "default-image.jpg"}"
          alt="${product.title}"
        />
      </div>

      <ul class="rating">
        ${generateStars(product.rating)}
         Reviews <span>(${
           typeof product.reviews === "number"
             ? product.reviews
             : product.reviews.length
         })</span>
      </ul>

      <p class="product-name">
       ${product.title}
      </p>
      <strong class="product-price">${product.price}</strong>
    `;

    productGrid.appendChild(productCard);
  });
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return `
   ${'<li><img src="assets/fill-star.svg" alt="fill star icon" /></li>'.repeat(
     fullStars
   )}
   ${
     halfStar
       ? '<li><img src="assets/half-star.svg" alt="half star icon" /></li>'
       : ""
   } 
    ${'<li><img src="assets/star.svg" alt="empety star icon" /></li>'.repeat(
      emptyStars
    )}
  `;
}

document.addEventListener("DOMContentLoaded", fetchProducts);
 */

async function fetchProducts() {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    const data = response.data.products; // A lista de produtos está dentro de "products"

    renderProducts(data);
  } catch (error) {
    console.error("Erro ao buscar os produtos: ", error);
  }
}

function renderProducts(products) {
  const productGrid = document.querySelector(".product-grid");
  productGrid.innerHTML = ""; // Limpa a grid de produtos

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // Gerando o conteúdo da card do produto
    productCard.innerHTML = `
      <div class="product-img">
        <img
          src="${product.thumbnail || "default-image.jpg"}"
          alt="${product.title}"
        />
      </div>

      <ul class="rating">
        ${generateStars(product.rating)}  <!-- Gerando estrelas com base na avaliação -->
         Reviews <span>(${product.ratingCount || 0})</span>  <!-- Considerando um valor default para o número de reviews -->
      </ul>

      <p class="product-name">
        ${product.title}
      </p>
      <strong class="product-price">${product.price}</strong>
    `;

    productGrid.appendChild(productCard);
  });
}

function generateStars(rating) {
  const fullStars = Math.floor(rating); // Estrela cheia
  const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Estrela meia
  const emptyStars = 5 - fullStars - halfStar; // Estrela vazia

  return `
   ${'<li><img src="assets/fill-star.svg" alt="fill star icon" /></li>'.repeat(fullStars)}
   ${halfStar ? '<li><img src="assets/half-star.svg" alt="half star icon" /></li>' : ""}
   ${'<li><img src="assets/star.svg" alt="empty star icon" /></li>'.repeat(emptyStars)}
  `;
}

document.addEventListener("DOMContentLoaded", fetchProducts);
