// const arr = [1,2,3,4,5];
// arr.indexOf(2); //1
// arr.push(6); //1,2,3,4,5,6
// arr.sort();
// arr.filter();//Lọc phần tử
// arr.find();//Tìm kiếm
// arr.findIndex();
// arr.some();
// arr.every();
// arr.forEach();
//Tham số nhận vào là function
//Hàm cũng chỉ là 1 giá trị , nó có thể được gán cho một biến, sao chep,
//Một hàm truyền vào hàm khác dưới dạng tham số gọi là CallBack
// let x = function(){
// }
// function demo(){
//     return function(){
//     };
// }
// demo(func);
// function sum(a,b){
// }
// sum(function(){},function(){});

//Sort: Sắp xếp các mảng và cập nhật giá trị trực tiếp qua mảng
//Làm thay đổi giá trị của mảng
const names = ["Binh", "Duc", "Tram", "Ba"];
const names2 = ["Binh", "Duc", "Tram", "Ba"];
const names3 = ["Binh", "Duc", "Tram", "Ba"];
//Sắp xếp theo thứ tự chữ cái
names.sort();
console.log(names);

names.sort(function (a, b) {
  //   if (a.length < b.length) {
  //     //Để  biết a đứng trước
  //     return -1;
  //   } else {
  //     return 1;
  //   }
  //cách 2
  return a.length - b.length;
});
//cleancode = errorfunction
names2.sort((a, b) => {
  return a.length - b.length;
});
//Cách3: Nếu chỉ có duy nhất 1 câu lệnh trong hàm
names3.sort((a, b) => a.length - b.length);
//2 thằng bằng nhau sẽ ko thay đổi vị trí trong mảng
console.log(names);

const numbers = [5, 11, 33, 3, 17, 7, 1, 6];
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);

const students = [
  { name: "Ba", age: 32, gender: "male" },
  { name: "Tram", age: 18, gender: "female" },
  { name: "Binh", age: 19, gender: "male" },
  { name: "Duc", age: 26, gender: "male" },
];
// students.sort();
//Giữ nguyên sau ki sort vì chuỗi sẽ chuyển thành [object object]
// console.log(String({name:'Tram'}));
//Đây là hành vi mặc định
//Để tránh sai sót, sử dụng call back trước khi sort
// students.sort((a, b) => {
//   if (a.name < b.name) {
//     return -1;
//   }
//   return 1;
// });
// students.sort((a, b) => a.age - b.age);
// console.log(students);

//forEach: với mỗi phần tử chạy hàm 1 lần, nhận 1 tham số là callback
//lặp qua mảng và với mỗi phần tử nó gọi hàm call back với giá trị của phần tử đó
//Chỉ sử dụng khi muốn lặp lại các phần tử của toàn mảng
//Không thể ngắt với break,continues, và bỏ qua return
names.forEach((name) => console.log(`Xin chào ${name}`));
//forEach nhận tối đa 3 tham số (giá trị,chỉ mục ,mảng)

//Filter: lọc các phần tử khớp với điều kiện
//Hàm callback cần trả về giá trị true , false để biết phần tử đó có khóp không
//Ứng dụng trong thao tác của bộ lọc dữ liệu vd: lọc sp theo danh mục,thể loại
const femaleStudent = students.filter(
  (students) => students.gender === "female"
);
console.log(femaleStudent);

const studentsAgeUnder20 = students.filter((students) => students.age < 20);
console.log(studentsAgeUnder20);

//Map(): chuyển phần tử này thành phần tử khác
//Nhận 1 tham số là hàm callback,với mỗi phần tử gọi hàm callback
const result = students.map((student) => ({
  name: student.name,
  age: student.age ,
  gender: student.gender === "male" ? "M" : "F", 
}));
const result2 = result.map((student) => ({
  name: student.name,
  age: student.age,
  gender: student.gender,
  isAdult: student.age >=20,
}));
//()=>({}): sẽ hiểu là trả về 1 error function, ko phải là 1 blockcode
console.log(result);
console.log(result2);


