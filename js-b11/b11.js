//Data/stage
let clicked = 0;
//Query Element
const button = document.querySelector('button');
//function update UI/view
function updateClick(clicked){
    //Cập nhật text ở span tương ứng với dữ liệu lượt click
    const count = document.querySelector('.count');
    if(count!=null){
        count.textContent = clicked;
    }
}
//hien thị dử liệu ban đầu lên trên giao diện (nếu cần)
updateClick(clicked);

//Các hàm xử lý dự kiện
btn.addEventListener('click',(eventObject) => { 
    //Nhận 3 tham sô(eventtype,hàm lắng nghe sự kiện, option: tùy chỉnh cho listener(thường ko dùng))
   //Cập nhật dữ liệu nào
    clicked++;
    //cập nhật hiển thị dữ liệu mới lên giao diện 
    updateClick(clicked);
});