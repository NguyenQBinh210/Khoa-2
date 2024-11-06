function products(name, price, brand, count) {
  this.brand = brand;
  this.name = name;
  this.price = price;
  this.count = count;
}
const products1 = new products("Iphone 13 Pro Max", 3000000, "Apple", 2);
const products2 = new products(
  "Samsung Galaxy Z Fold3",
  41000000,
  "Samsung",
  1
);
const products3 = new products("IPhone 11", 15500000, "Apple", 1);
const products4 = new products("OPPO Find X3 Pro", 19500000, "OPPO", 3);
//1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
