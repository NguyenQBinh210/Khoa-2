let arr = [10, 20, 30, 40, 50, 60, 70];
console.log(arr.length);

let arr2 = ["Ba", "Binh", "Tram", "Duc", "Nam", "Hung", "Thuc"];
// console.log(arr2);
// console.log(arr2[0]);
// console.log(arr2[1]);
// console.log(arr2[2]);
// console.log(arr2[arr2.length - 1]); //Truy cập vào phần tử cuối cùng
// console.log(arr[-1]);//Trả về undefine

let orther = [{ x: 1, y: 2 }];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

console.log(arr2.includes("Binh"));
console.log(arr2.indexOf("Binh"));
console.log(arr2.unshift("Binh")); //Trả về độ dài mới sau khi chèn
console.log(arr2.shift());
console.log(arr2.slice(3, 6));
console.log(arr.find((element) => element > 10));
//Xóa
let index = arr2.indexOf("Tram"); //TÌm tên
arr2.splice(index, 1); //Xóa theo tên
console.log(arr2);
//Chèn vào giữa
arr2.splice(index, 0, "Tram"); //Tìm tên/0 phần tử muốn xóa/tên cần thêm
console.log(arr2);
//Thay thế
arr2.splice(index, 1, "Vu Tram"); //Bắt đầu từ vị trí thứ 2, xóa 1 cái tên sau đó chèn thêm vào
console.log(arr2);






