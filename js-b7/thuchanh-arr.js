//Viết hàm sumAvg(arr) tính trung bình cộng một mảng số
function sumAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return Math.floor(sum / arr.length);
}
let arr2 = [10, 32, 21, 343, 35, 38];
console.log("Trung bình cộng: " + sumAvg(arr2));
//Viết hàm findMax(arr) tìm giá trị lớn nhất trong một mảng
function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log("Số lớn nhất: " + findMax[arr2]);
