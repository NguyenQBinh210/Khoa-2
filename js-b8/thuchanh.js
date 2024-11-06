// 3. Viết hàm getMax nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 } ]
// Trả về giá trị cao nhất của key tương ứng
// Ví dụ: getMax(arr, "age") => 31

const people = [
  { name: "Ba", age: 31, score: 7 },
  { name: "Mai Anh", age: 30, score: 8 },
  { name: "Tram", age: 18, score: 9 },
  { name: "Tram1", age: 19, score: 9 },
];
function getMax(arr, key) {
  arr.sort((a, b) => a[key] - b[key]);
  return arr[arr.length - 1][key];
}
console.log(getMax(people, "age"));
console.log(getMax(people, "score"));
//Cách 2
function getMax(arr, key) {
  let max = 0;

  arr.forEach((obj) => {
    if (obj[key] > max) {
      max = obj[key];
    }
  });

  return max;
}
// 6. Viết hàm countValues nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 }, { name: "Minh Đức", age: 30 } ]
// Trả về một object với tổng số lần xuất hiện giá trị của key
// Ví dụ: countValues(arr, "age") => { 31: 1, 30: 2 }
function countValues(arr, key) {
  // Code
  //   let count = {}; //Biến ban đầu để lưu kết quả và tích lũy lưu giá trị với mỗi lần lặp
  //   arr.forEach((obj) => {
  //     if (obj[key] in count) {
  //       count[obj[key]] += 1;
  //     } else {
  //       count[obj[key]] = 1;
  //     }
  //   });

  // arr.reduce(callback,initialValues);
  //arr.reduce((preValue,currentValue) => {},{})
  return arr.reduce((acc, obj) => {
    if (obj[key] in acc) {
      acc[obj[key]] += 1;
    } else {
      acc[obj[key]] = 1;
    }
    return acc;
  }, {});
}
const names = [
  { name: "Ba", age: 31 },
  { name: "Mai Anh", age: 30 },
  { name: "Minh Đức", age: 30 },
];
console.log(countValues(names, "age"));
console.log(countValues(people, "score"));

// 7. Viết hàm groupBy nhận vào một mảng object bất kỳ và một key
// Ví dụ: [ { name: "Ba", gender: "Male" }, { name: "Mai Anh", gender: "Female" }, { name: "Đức", gender: "Male" } ]
// Trả về một object với các object được nhóm theo key
// Ví dụ: groupBy(arr, "gender") => { male: [ { name: "Ba", gender: "Male" }, { name: "Đức", gender: "Male" } ], female: [ { name: "Mai Anh", gender: "Female" } ]}
function groupBy(arr, key) {
  return arr.reduce((result, currentItem) => {
    // Lấy giá trị của key từ object hiện tại
    const keyValue = currentItem[key];

    // Nếu key đó chưa có trong result, khởi tạo nó với mảng rỗng
    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    // Thêm object hiện tại vào mảng tương ứng
    result[keyValue].push(currentItem);

    return result;
  }, {}); // Khởi tạo result là một object rỗng
}

// Ví dụ sử dụng:
const people2 = [
  { name: "Ba", gender: "Male" },
  { name: "Mai Anh", gender: "Female" },
  { name: "Đức", gender: "Male" },
];

const grouped = groupBy(people, "gender");
console.log(grouped);



//Reduce: giải quyết các bài liên quan đến tổng hợp và tính toán các dữ liệu trong mảng
