// document.querySelector(`#heading`);
// heading.style;
// console.log(heading.id);
// console.log(heading.title);
// console.log(heading.lang);
//Global attribute: thuộc tính có trên tất cả các thẻ
// console.log(heading.getAttribute('id'));
// console.log(heading.getAttribute('title'));
// console.log(heading.getAttribute('class'));
// heading.setAttribute('class','text-red');
// heading.setAttribute('title','Đây là tiêu đề');

// heading.hasAttribute('class');
// heading.removeAttribute('class');
function createContainer() {
  const div = document.createElement("div");
  div.classList.add("container");
  div.setAttribute("title", "Container");
  div.style.cssText = `
    max-width: 1000px;
    margin-inline: auto;
    `;
  div.innerHTML = `
    <p>Đây là nội dung được tạo thông qua js</p>
    `;
  return div;
}

//append: chèn vào vị trí cuối cùng, sau các node khác trong div,
//appendChild: tương tự append chèn js
//before: chèn vào trước ,
//prepend: chèn trước các nođe khác có trong div,
//after: chèn bên dưới,
//insert
const content = document.querySelector(".content");
if (content != null) {
  content.after(createContainer());
  content.after(createContainer());
  content.after(createContainer());
  content.after(createContainer());
  content.after(createContainer());
  //Nốt đã xuất hiện rồi sẽ ko chèn tiếp
} else {
  console.log("Content not found!");
}

// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
function createLink(href, text, isBlank) {
  const a = document.createElement("a");
  a.setAttribute("href", href);
  a.textContent = text;
  if (isBlank) {
    a.setAttribute("target", "_blank");
  }
  return a;
}
const a = document.createElement("a");
a.setAttribute("href", "https://www.facebook.com/");
a.setAttribute("target", "_blank");
a.textContent = "Facebook";
const p3 = document.querySelector(".para-3");
if (p3 != null) {
  p3.after(a);
  p3.after(
    createLink(
      "https://chatgpt.com/c/6718df33-3800-800b-97ed-41fdf228fa34",
      "Chatgpt",
      true
    )
  );
} else {
  console.log("No link");
}
// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const title1 = document.querySelector("#title");
if (title1 != null) {
  title1.innerHTML = `Đây là thẻ tiêu đề`;
}
// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
const description = document.querySelector(".description");
description.classList.add("text-bold");

// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”\
//Thêm 1 tt vào và xóa 1 tt đi
const btn = document.createElement("button");
const p31 = document.querySelector(".para-3");
btn.textContent = `Click me`;
// b3.before(btn);
// b3.remove();
// p31.replaceWith(btn);
document.body.replaceChild(btn, p31);
// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const p2 = document.querySelector(".para-2");
p2.cloneNode();
p2.after(p2.cloneNode(true));
// Xóa thẻ có class=“para-1”
const para1 = document.querySelector(".para-1");
para1.remove();
