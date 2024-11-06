//    Tính tổng 2 số a, b bất kỳ.
// Tính bình phương 1 số bất kỳ.
// Tính thế kỷ của 1 năm bất kỳ (năm là 1 số nguyên dương).
function sum(a, b) {
  return a + b;
}
function square(n) {
  return Math.pow(n, 2);
}
function sumCentury(year) {
  return Math.ceil(year / 100);
}
console.log("Tong 2 so 10 và 20: " + sum(10, 20));
console.log("Bình phương của 8 là: " + square(8));
console.log("Thế kỷ của năm 2024 là : " + sumCentury(2024));

