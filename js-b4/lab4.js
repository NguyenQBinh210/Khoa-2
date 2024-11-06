// for(let i = 1;i<=10;i++){
//     console.log('Lần lặp thứ '+i);
// }

for (let i = 1; i <= 30; i++) {
  if (i == 7) {
    //Hôm này bận ko đọc được
    continue;
  }
  if (i == 15) {
    //Chán! Ko đọc nữa!
    break;
  }
  console.log("Đọc sách ngày thứ " + i);
}

// while(condition){
//     //code
// }
// do{

// }while(condition);
// for(let i = 1;i<=30;i++){
//     if(i%7==0||i%6==0){
//         console.log(`Ngày ${i} dậy lúc 10h sáng`);
//     }else{
//         console.log(`Nay là ngày thứ ${i} trong tuần phải dậy lúc 5h30 sáng`);
//     }
// }

//Đọc liên tục 30 ngày hoặc hết cuốn
//Cuốn sách có 300 trang
//Mỗi ngày đọc 20 trang
let totalPage = 300;
let readedPage = 0;
for (let i = 1; i <= 30; i++) {
  readedPage += 20;
  console.log(`Ngày ${i} đã đọc: ` + readedPage +" trang");
  if (i == 10) {
    console.log(`Ngày ${i} sách mất rồi`);
    break;
  }
  if (readedPage == totalPage) {
    console.log("Cuốn sách đã đọc xong");
    break;
  }
}
