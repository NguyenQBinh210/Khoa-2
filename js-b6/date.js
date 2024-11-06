const now = new Date();
console.log(now);
//ISO: YYYY/MM/DD:MM:SS
const myDate = new Date("2004/10/27");
console.log(myDate);
//Tự động bù trừ
console.log(new Date(2024,10,32));
//tháng(dạng số) 0-11: nên phải lấy getMonth + 1
console.log(now.getMonth()+1);
