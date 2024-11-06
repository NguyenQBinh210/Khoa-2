// let str = 'Hello word!';
// console.log(str[0]);
// console.log(str[5]);
// console.log(str.length);
// for(let i = 0;i<str.length;i++){
//     console.log(str[i]);
// }
//Viết hàm cắt chuỗi từ vị trí đầu đến vị trí chỉ định
//VD: "abcd",2=>abc
function cutString(str, number) {
  let str2 = str.slice(0, number + 1);
  console.log(str2);
}

cutString("abcd", 2);

//Viết hàm chuyển đổi 1 tên thành tên viết tắt
function chuyenten(name5){
let spaceIndex = name5.lastIndexOf(" ");
let namePrefix = name5.slice(0, spaceIndex + 2);
console.log(namePrefix + ".");
}
chuyenten("Nguyễn Bình");
//Viết hàm ẩn địa chỉ mail
function chemail(mail) {
  let atriskIndex = mail.indexOf("@"); //tìm bên trái sang
  console.log(mail.slice(0, 2) + "..." + mail.slice(atriskIndex));
}
chemail("nguyenqbinh210@gmail.com");
