let allProducts = [];
let currentPage = 1;
const productsPerPage = 12;

async function loadProducts() {
  const res = await fetch(`${API_BASE_URL}/products`);
  allProducts = await res.json();
  currentPage = 1;
  renderPage();
}

function renderPage() {
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const paginatedProducts = allProducts.slice(start, end);

  renderProducts(paginatedProducts);
  renderPagination();
}

function renderProducts(products) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  products.forEach(p => {
    const imagePath = "../assets/images/products/" + p.id + ".jpg";



    container.innerHTML += `
  <div class="product-card">
    <div class="product-image">
      <img src="../assets/images/products/${p.id}.jpg"
           alt="${p.name}"
           onerror="this.src='../assets/images/products/1.jpg'">
    </div>

    <h3>${p.name}</h3>
    <p class="desc">${p.description}</p>
    <div class="price">₹${p.price}</div>

    <div class="btn-group">
      <button class="btn view" onclick="viewDetails(${p.id})">View</button>
      <button class="btn cart"
        onclick="addToCart(${p.id}, '${p.name}', ${p.price})">
        Add to Cart
      </button>
      <button class="btn delete" onclick="deleteProduct(${p.id})">Delete</button>
    </div>
  </div>
`;
  }
  )
}

/* PAGINATION UI */
function renderPagination() {
  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  if (currentPage > 1) {
    pagination.innerHTML += `
      <button onclick="changePage(${currentPage - 1})">Prev</button>
    `;
  }

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <button class="${i === currentPage ? 'active' : ''}"
              onclick="changePage(${i})">
        ${i}
      </button>
    `;
  }

  if (currentPage < totalPages) {
    pagination.innerHTML += `
      <button onclick="changePage(${currentPage + 1})">Next</button>
    `;
  }
}

function changePage(page) {
  currentPage = page;
  renderPage();
}

/* SEARCH */
function searchProducts() {
  const value = document.getElementById("searchInput").value.toLowerCase();
  allProducts = allProducts.filter(p =>
    p.name.toLowerCase().includes(value) ||
    p.description.toLowerCase().includes(value)
  );
  currentPage = 1;
  renderPage();
}

/* NAV */
function viewDetails(id) {
  window.location.href = `product-details.html?id=${id}`;
}

async function deleteProduct(id) {
  await fetch(`${API_BASE_URL}/products/${id}`, { method: "DELETE" });
  loadProducts();
}

window.onload = loadProducts;
