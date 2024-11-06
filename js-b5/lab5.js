let noInfObj = {};
let obj = {
  name: "Bình Nguyễn",
  year: "2004",
  age: "19",
  weight: "58kg",
  height: "1.74",
  speak(){
    console.log("Say somethink");
  }
};
obj.speak();
//Thêm dữ liệu
obj.home = "Hà Nội";
obj.email = "nguyenqbinh210@gmail.com";
//Truy cập dữ liệu
//Cách 1: In ra dạng giống khi nhập
console.log(obj);
console.log(obj.name); //Truy cập giá trị
console.log(obj["weight"]);
//Cách 2: In ra dưới dạng dữ liệu
for (const key in obj) {
  console.log(obj[key]);
}

let key = "age";
console.log(obj[key]);

//Thay đổi/gán dữ liệu
noInfObj.name = "Nam";
noInfObj.year = "2012";
noInfObj['weight'] = 44;
noInfObj['height'] = 1.64;
noInfObj[key] = "12";
console.log(noInfObj);

//Xóa dữ liệu 
delete noInfObj.name;
delete noInfObj.year;
delete noInfObj['height'];
delete noInfObj['weight'];
delete noInfObj[key];
console.log(noInfObj);
