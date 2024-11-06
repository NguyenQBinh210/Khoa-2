// //Cho 1 object chứa các thông tin về đơn hàng
// const order = {
//     tv: 1000,
//     laptop: 2000,
// };
// //Tính tổng giá trị hóa đơn
// // let key = "tv";
// // let key2 = "laptop";
// // console.log(order['tv']+order['laptop']);
// let total = 0;
// for(let item in order){
//     total += order[item];
// }
// console.log(total);

// //Cho 1 obj contact lưu danh bạ người dùng
// function contact(name, phonenumber) {
//   //this: truy cập đến đối tượng đang được tạo ra
//   this.name = name;
//   this.phonenumber = phonenumber;
// }
// //Viết hàm addcontact để thêm 1 contact vào
// //Hàm nhận tham số ten, sdt
// function addcontact(addName, addPhoneNumber) {
//     const person = new contact(addName,addPhoneNumber);
//     for(let key in person){
//         console.log(person[key]);
//     }
// }
// addcontact("Bình","0866896758");
// addcontact("Ba","0123456789");
const contact = {};
function addContact(name, phoneNumber) {
  if (name in contact) {
    //Kiểm tra giá trị của name
    console.log("Danh bạ đã tổn tại");
  } else {
    contact[name] = phoneNumber;
  }
}
addContact("Bình", "0866896758");
addContact("Ba", "0123456789");
addContact("Nam", "0999999999");
addContact("Long", "0999999999");
addContact("ewqe", "0299999");
console.log(contact);

//Viết hàm findContactByName để tìm theo tên
//Hàm nhận vào tham số
//Tên người liên hệ
//Kết quả: Sđt hoặc ko có tên người liên hệ
function findContactByName(name) {
  if (name in contact) {
    console.log(contact[name]);
  } else {
    console.log("Không có tên liên hệ");
  }
}
findContactByName("Bình");
//Viết hàm xóa danh bạ
function deleteContact(name) {
  if (name in contact) {
    delete contact[name];
  } else {
    console.log("Không có danh bạ");
  }
}
deleteContact("Ba");
console.log(contact);
//Viết hàm tính tổng số số contact
function calcNumberOfContact() {
  let sum = 0;
  for (let key in contact) {
    sum++;
  }
  return sum;
}
console.log(calcNumberOfContact());

//Viết hàm tìm các contact trùng lăp(Phone number)
//Dùng 2 vòng lặp
// function looklinePhone() {
//   for (let key in contact) {
//     for (let key2 in contact) {
//       if (contact["key"] == contact["key2"]) {
//         console.log(contact["key"], "trùng ", contact["key2"]);
//       }
//     }
//   }
// }
// looklinePhone();
//Cách 1: dùng 2 vòng lặp lồng nhau
//Cách 2: dùng object khác để lưu
//Vẽ tam giác
function drawTriangle(row){
  const symbol = '*';
  for(let i = 1;i<=row;i++){
    console.log(symbol.repeat(i));
  }
}
drawTriangle(4);
function drawTriangle2(row) {
  const symbol = "*";
  for (let i = 1; i <= row; i++) {
    let star ='';
    for(let j = 1;j<=i;j++){
      star += symbol;
    }
    console.log(star);
  }
}
drawTriangle2(4);