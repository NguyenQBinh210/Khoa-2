//Dữ liệu
let product;
/**
 * @returns {Promise<Product>}
 */
function getProductInfor(id) {
  return fetch("https://dummyjson.com/products/" + id)
    .then((res) => {
      if (!res.ok) {
        throw res;
      } else {
        return res.json();
      }
    })
    .then((json) => {
      product = json;
      return product;
    });
}
//Query element(truy vấn phần tử)
const productInfor = document.querySelector(".product-infor");
const productImage = document.querySelector(".product-image");
const productLoading = document.querySelector(".loading");
const productError = document.querySelector(".error");
const productWarpper = document.querySelector(".product-wrapper");
const productTitle = document.querySelector(".product-title");
const productDescription = document.querySelector(".product-description");
const productRating = document.querySelector(".product-rating");
const productPrice = document.querySelector(".product-price");
const producDiscountPrice = document.querySelector(".product-discount-price");
const productQuantity = document.querySelector(".input-qty");
const productIncrease = document.querySelector(".product-increase");
const productDecrease = document.querySelector(".product-decrease");
const productAddToCart = document.querySelector(".button-73");
//Render(Hiển thị dữ liệu)
function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}
function showLoading() {
  productLoading.style.display = "block";
  productError.style.display = "none";
  productWarpper.style.display = "none";
}
function showProducts() {
  productLoading.style.display = "none";
  productError.style.display = "none";
  productWarpper.style.display = "block";
}
function showError(error) {
  console.log(error);
  productLoading.style.display = "none";
  productError.style.display = "block";
  productWarpper.style.display = "none";
}
function renderProducts(product) {
  productLoading.style.display = "none";
  productTitle.textContent = product.title;
  productRating.textContent = product.rating;
  productImage.innerHTML = product.images
    .map((img) => `<img src="${img}" alt ="${product.title}" />`)
    .join("");
  producDiscountPrice.textContent = formatPrice(
    product.price - (product.price * product.discountPercentage) / 100
  );
  productPrice.textContent = product.price;
  productDescription.textContent = product.description;
}
function setupQuantity() {
  productDecrease.addEventListener("click", () => {
    if (Number(productQuantity.value) > 1) {
      productQuantity.value = Number(productQuantity.value) - 1;
    }
  });
  productIncrease.addEventListener("click", () => {
    if (Number(productQuantity.value) < product.stock) {
      productQuantity.value = Number(productQuantity.value) + 1;
    }
  });
}
// function addToCart() {
//   productAddToCart
//     .addEventListener("click", () => {
//       const quantity = Number(productQuantity.value);

//       fetch("https://dummyjson.com/carts/add", {
//         method: "POST", //Đường dẫn
//         headers: {
//           "Content-Type": "application/json", //Khai báo định dạng dữ liệu mình muốn hiển thị
//         },
//         body: JSON.stringify({
//           userId: 1,
//           products: [
//             {
//               id: product.id,
//               quanity: quantity,
//             },
//           ],
//         }), //Dữ liệu thực tế cụ thể
//       })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .then(()=>{
//         window.location.href = 'cart.html';
//       });
//     });
// }
//Event

function main() {
  const searchParam = new URLSearchParams(location.search);
  const productId = searchParam.get("product-id");

  // getProductInfor(productId)
  // .then((data)=>console.log(data))
  // .catch((error)=>{
  //     console.e(error);
  // });
  showLoading();
  getProductInfor(productId)
    .then(renderProducts)
    .then(showProducts)
    .then(setupQuantity)
    .then(setupAddToCart)
    .catch(showError);
}
main();
