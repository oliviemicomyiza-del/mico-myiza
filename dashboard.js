let products = JSON.parse(localStorage.getItem("products")) || [];

/* NAVIGATION */
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");
}

/* ADD PRODUCT */
document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const qty = document.getElementById("qty").value;

  products.push({ name, qty });
  localStorage.setItem("products", JSON.stringify(products));

  document.getElementById("name").value = "";
  document.getElementById("qty").value = "";

  loadProducts();
  showPage("products");
});

/* LOAD PRODUCTS */
function loadProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach((p, index) => {
    list.innerHTML += `
      <tr>
        <td>${p.name}</td>
        <td>${p.qty}</td>
        <td>
          <button onclick="deleteProduct(${index})">Delete</button>
        </td>
      </tr>
    `;
  });

  document.getElementById("count").innerText = products.length;
}

/* DELETE */
function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  loadProducts();
}

/* LOGOUT */
function logout() {
  alert("Logged out");
  window.location.href = "login.html";
}

loadProducts();
function toggleMenu() {
  document.querySelector(".sidebar").classList.toggle("active");
}
