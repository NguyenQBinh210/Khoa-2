let cart = null;
const cartIcon = document.querySelector(".heading-cart");
const cartQuantity = document.querySelector(".quantity");
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
  cartQuantity.textContent = cart.totalQuantity;
      cartQuantity.style.display = "flex";
} else {
  fetch("https://dummyjson.com/carts/1")
    .then((res) => res.json())
    .then((data) => {
      cart = data;
      localStorage.setItem("cart", JSON.stringify(data));
      cartQuantity.textContent = cart.totalQuantity;
      cartQuantity.style.display = "flex";
    });
}
// function renderCartQuantity(cart){ hiển thị sản phẩm ở icon
//     cartQuantity.textContent = cart.totalQuantity;
// }
function addToCart() {
  productAddToCart.addEventListener("click", () => {
    const quantity = Number(productQuantity.value);

    fetch("https://dummyjson.com/carts/add", {
      method: "PUT", //Đường dẫn
      headers: {
        "Content-Type": "application/json", //Khai báo định dạng dữ liệu mình muốn hiển thị
      },
      body: JSON.stringify({
        userId: 1,
        products: [
          {
            id: product.id,
            quanity: quantity,
          },
        ],
      }), //Dữ liệu thực tế cụ thể
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        window.location.href = "cart.html";
      });
  });
}
function setupAddToCart() {
  productAddToCart.addEventListener("click", () => {
    const quantity = Number(productQuantity.value);
    const newProduct = cart.products.map((p) => ({
      id: p.id,
      quantity: p.quantity,
    }));
    if (newProduct.find((p) => p.id === product.id)) {
      newProduct.find((p) => p.id === product.id).quanity += quantity;
    } else {
      newProduct.push({
        id: product.id,
        quantity: product.quantity,
      });
    }
    fetch("https://dummyjson.com/carts/1", {
      method: "PUT", //Cho phép gửi dữ liệu lên server
      headers: {
        "Content-Type": "aplication/json", //Mine type các thông tin
      },
      body: JSON.stringify({
        products: newProduct, //Lấy dữ liệu giỏ hàng hiện tại
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        cart = data;
        localStorage.setItem('cart',JSON.stringify(data));
      })
      .then(() => {
        window.location.href = "cart.html";
      });
  });
}
