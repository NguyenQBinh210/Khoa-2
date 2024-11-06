//Khi nhấn vào button “Change content” hiển thị một nội dung quote bất kỳ
const btn1 = document.querySelector("#btn-1");
const text = document.querySelector("#text");
const quotes = [
  "The only way to do great work is to love what you do.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "In the end, we only regret the chances we didn't take.",
  "Life is what happens when you're busy making other plans.",
  "Don't watch the clock; do what it does. Keep going.",
];
function randomQuotes(quotes) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
function showRandomQuotes() {
  const quote = randomQuotes(quotes);
  text.textContent = quote;
}
showRandomQuotes();
btn1.addEventListener("click", (eventObject) => {
  showRandomQuotes();
});
// Khi nhấn vào button “Change color” thì thay đổi màu của thẻ p (sử dụng màu HEX - cần viết 1 function để random màu HEX)
const btn2 = document.querySelector("#btn-2");
function randomHex() {
  let result = "#";
  for (let i = 0; i < 6; i++) {
    result += Math.floor(Math.random() * 16).toString(16);
  }
  return result;
}
function showRandomColor() {
  const colorRandom = randomHex();
  text.style.color = colorRandom;
}
1;
showRandomColor();
btn2.addEventListener("click", (eventObject) => {
  showRandomColor();
});
// Khi nhấn vào button “Change background” thì thay đổi màu background-color của thẻ p (sử dụng màu RGB - cần viết 1 function để random màu RGB)
const btn3 = document.querySelector("#btn-3");
function changeBackground() {
  const colorRandom = randomHex();
  text.style.backgroundColor = colorRandom;
}
changeBackground();
btn3.addEventListener("click", (eventObject) => {
  changeBackground();
  console.log(eventObject.target); //Đối tượng mình click
  console.log(eventObject.clientX);
  console.log(eventObject.clientY);
});
//Dữ liệu ban đầu
let previousCircle = null;
function showCircle(position) {
  if (previousCircle) previousCircle.remove();
  const circle = document.createElement("div");
  circle.style.cssText = `
    background-color: red;
    border: 1px solid yellow;
    border-radius: 50%;
    position: fixed;
    top: ${position.y - 15}px;
    left: ${position.x - 15}px;
    width:30px;
    height:30px;
    `;
  document.body.appendChild(circle);
  previousCircle = circle;
}
window.addEventListener("click", (eventObject) => {
  // debugger;//Dừng tại câu lệnh debuger kiểm tra từng bước sau khi debug
  const position = {
    x: eventObject.clientX,
    y: eventObject.clientY,
  };
  showCircle(position);
});
//Sửa lỗi
//1. Kiểm tra console
//2. Kiểm tra event
//3. Thêm log để kiểm tra => hàm xử lý sự kiện có thực sự chạy ko
//4. Debug: gỡ lỗi
