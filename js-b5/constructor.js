//Hàm khởi tạo
function Person(name, age, weight, height, gender) {
  //this: truy cập đến đối tượng đang được tạo ra
  this.name = name;
  this.height = height;
  this.age = age;
  this.weight = weight;
  this.gender = gender;
}
//Prototype: nguyên mẫu vì hầu hết mọi thứ trong js là obj nên tất cả mọi thứ đều có prototype
Person.prototype.speak = function () {
  console.log("Say hello!");
};
const binh = new Person("Bình", 19, 58, 1.74, "Male"); //Phiên bản của person và kế thừa tất cả từ Person
const ba = new Person("Ba", 32, 53, 1.7, "Male");
const tram = new Person("Trâm", 18, 48, 1.64, "Female");
console.log(ba);
//Có kiểu là Person và được tạo bởi cái hàm khởi tạo là person
binh.speak(); //Lấy từ prototype
console.log(binh);

let objs={
    x:1,
    y:2,
    z:3
};
for(let key in objs){
//Với key là tham số vòng lặp objs:tên biến truyên vào
    console.log(key);
    //key tương đương với từng thuộc tính trong objs;
    console.log(objs[key]);
}