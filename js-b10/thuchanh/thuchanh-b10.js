function changeContent() {
  // Thay đổi nội dung của đoạn văn có id là text-content
  const tContent = document.querySelector("#text-content");
  if (tContent != null) {
    tContent.innerHTML = "DOM khó vl";
  }
  return tContent;
}

function replaceText() {
  // Thay thế nội dung của đoạn văn có class là intro
  const intro = document.querySelector(".intro");
  if (intro != null) {
    intro.textContent = `Once you have enough points, eligible rewards will become visible on your Rewards page. Save up for a big item, and spend your points on smaller rewards along the way – however you want to redeem your points, we’re with you. We’ll track your point progress, so you can keep earning and spending without counting on your fingers.`;
  }
  return intro;
}

function highlightText() {
  // Tìm tất cả các đoạn văn (<p>) và thêm class highlight vào chúng để tô màu nền.
  const paras = document.querySelectorAll("p");//tra ve para la mot node list/mang
  //Phai duyet qua tung thanh phan sau do them class vao moi the
  paras.forEach((para) => {
    para.classList.add("highlight"); // Thêm class 'highlight' vào từng đoạn văn
  });
  return paras;
}

function addCss() {
  // Thay đổi màu chữ, kích thước và trọng lượng của tiêu đề có id là main-title.
  const title = document.querySelector("#main-title");
  // const title = document.getElementById('main-title');
  if (title != null) {
    title.style.cssText = `
    color: red;
    font-size: 30px;
    font-weight: bold;`;
  }
  return title;
}

function addListItem() {
  // Thêm một mục mới vào cuối danh sách có id là list.
  const list = document.querySelector("#list");
  // const list = document.getElementById('list');
  const newItem = document.createElement("li");
  newItem.textContent = "Học ReactJS";
  list.appendChild(newItem);
}

function removeLastItem() {
  // Xóa mục cuối cùng trong danh sách có id là list.
  const list = document.querySelector("#list");
  const lastItem = list.lastElementChild;
  if(lastItem!=null){
    //lastItem.remove();
    list.removeChild(lastItem);
  }
}

function toggleClass() {
  // Bật hoặc tắt class new-class cho đoạn văn có class là intro.
  const intro = document.querySelector('.intro');
  if(intro!=null){
    // intro.classList.toggle();//toggle: bật tắt class
    if(intro.classList.contains('new-class')){
      intro.classList.remove('new-class');
    }else{
      intro.classList.add('new-class');
    }
  }
}

function countParagraphs() {
  // Đếm số lượng đoạn văn (<p>) trên trang và hiển thị thông báo với số lượng đó.
  const paras = document.querySelectorAll("p");
  // alert(`Có ${paras.length} đoạn văn trên trang.`);
  const numberOfParas = paras.length;
  console.log(`Số lượng thẻ văn bản là:  ${numberOfParas}`);
}

function replaceListItems() {
  // Thay thế tất cả các mục trong danh sách có id là list bằng các mục mới.
  const list = document.getElementById('list');
  for(let item of list.children){
    const newItem = document.createElement('li');
    newItem.textContent = 'Phần tử mới được tạo';
    item.replaceWith(newItem);
    }//Lấy tất cả thẻ con bên trong list
}

function moveTitle() {
  // Di chuyển tiêu đề có id là main-title xuống cuối trang.
  // const title = document.querySelector("#main-title");
  // document.body.appendChild(title);
  const mainTitle = document.getElementById('main-title');
  const list = document.getElementById('list');
  // list.after(mainTitle);
  list.after(mainTitle.cloneNode(mainTitle));
}
