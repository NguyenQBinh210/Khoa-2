// du lieu
//Dữ liệu
/**
 * get product from api
 * @returns {Promise<GetProductResponse>}
 */

function getProducts() {
  return fetch("https://dummyjson.com/products") // gửi dữ liêu tới sever
    .then((res) => res.json()); // thực hiện thực thi khi nhận được kết quả từ câu lệnh trên
  // .then((data) => {
  //     console.log(data);
  // })
  //   .catch((error) => {
  //     // khi hành động khôgn thực hiện đc
  //     console.error(error);
  //   }) // cả cụm này trả về kế quả đều là prommit
}
//truy van cac phan tu can thiet
const productLoading = document.querySelector(".product-list-wrapper .loading");
const productError = document.querySelector(".product-list-wrapper .error");
const productList = document.querySelector(
  ".product-list-wrapper .product-list"
);
// ham xu ly

//ham render

function showLoading() {
  productLoading.style.display = "block";
  productError.style.display = "none";
  productList.style.display = "none";
}
function showProducts() {
  productLoading.style.display = "none";
  productError.style.display = "none";
  productList.style.display = "grid";
}
function showError() {
  productLoading.style.display = "none";
  productError.style.display = "block";
  productList.style.display = "none";
}
/**
 * Render product to html
 * @param {*} data 
 */

function renderProducts(data) {
  productLoading.style.display = "none";
  productList.innerHTML = data.products
    .map(
      (p) => `
        <div class="product">
            <div class="product-img">
                <img src="${p.thumbnail}" alt="${p.title}">
            </div>
              <a href="product.html?product-id=${p.id}">
              <h4 class="product-title">${p.title}</h4>
              </a>
            <div class ="price">
            <p class="product-price">${p.price}</p>
            <p class="product-discount" style="text-decoration: line-through;">${
              p.discountPercentage
            }</p>
            </div>
            <div class='set-button'>
            <a href="product.html?product-id=${p.id}">
            <button class="button" data-product-id="${p.id}">Mua </button>
            </a>
            </div>
            <div class="product-rating">${renderStars(p.rating)}</div> 
            </div>
            `
      // <button class="button" data-product-id="${p.id}">
      // <a href="product.html?product-id=${p.id}">Xem Thêm </a></button>
    )
    .join("");
}
function renderStars(rating) {
  const fullStar = '<span class="star">★</span>';
  const emptyStar = '<span class="star">☆</span>';
  const roundedRating = Math.round(rating);

  return fullStar.repeat(roundedRating) + emptyStar.repeat(5 - roundedRating);
}

//ham xu ly su kien
//-cap nhat du lieu
//-cap nhat giao dien

function main() {
  showLoading();
  getProducts().then(renderProducts).then(showProducts).catch(showError);
}
main();
// update loading , error xin hon
//layout ,css
