// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const h1 = document.querySelector("#heading");
if (h1) {
  //kiểm tra xem có ko
  h1.style.cssText = `    
color: red;
font-size: 20px;
line-height: 40px;
`;
  h1.textContent = h1.textContent.toUpperCase();
}
const allParagraphs = document.querySelectorAll(".para");
if (allParagraphs.length > 0) {
  for (let para of allParagraphs) {
    para.classList.add("text-red");
    para.style.cssText = `
            color: blue;
            font-size: 20px;
        `;
  }
  //   allParagraphs.forEach();
}
para2.style.cssText = `
color: blue;
font-size: 20px;
`;
