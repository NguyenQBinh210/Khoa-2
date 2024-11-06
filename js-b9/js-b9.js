const div = document.querySelector(".wrapper"); //Bo chon class
const h1 = div.querySelector(".heading");
const p = div.querySelector(".description");
// const all = document.querySelectorAll(".wwapper,.heading,.description");
// console.log(all);
//Trả về chuỗi html
console.log(div.innerHTML); //Chỉ lấy nội dung html bên trong
console.log(div.outerHTML); //Lấy cả nội dung của div
console.log(div.innerText); //Chỉ lấy nội dung văn bản bên trong(ko html)
console.log(div.textContent); //Bao gồn cả phần lề giống trong mã
p.textContent = "thay đổi nội dung phần tử thông qua thuộc tính text content"; //Dạng văn bản

p.innerHTML =
  "thay đổi nội dung phần tử thông qua thuộc tính <b>text content</b>"; //Dạng html

//Thay đổi style: thêm bớt class ==> thay đổi style
// p.classList.add("text-red");//chỉ có tên class
//THao tác thêm bớt sửa xóa các class
// sử dụng inlineStyle ==> dùng các hiệu ứng động
p.style.color = "red"; //cần phải sử dụng camel case chứ ko đc dùng như css
p.style.cssText = `
color: red;
font-size: 20px;
line-height: 40px;
`;

console.log(h1.hasAttribute("lang"));
console.log(h1.getAttribute("lang"));
h1.setAttribute("lang", "en");
console.log(h1.getAttribute("lang"));
h1.removeAttribute("lang");
