//Viết hàm tạo 1 số ngẫu nhiên từ 0 đến n
function randomNumber(n){
    return Math.floor(Math.random()*n);
}
console.log("Số ngẫu nhiên từ 0 đến 100: "+randomNumber(100));
//Viết hàm chuyển đổi từ hệ cơ số này sang hệ cơ số khác
function transferringTheBaseSystem(number1,baseSystem1,baseSystem2){
    if(baseSystem1!=10){
        number1 = +number1.toString(10);
    }
    if(baseSystem2!=10){
        return number1.toString(baseSystem2);
    }
    return number1;
}
console.log(transferringTheBaseSystem(0b10,2,16));
//Tạo 1 số nguyên ngẫu nhiên trong khoảng a->b
function randomAtoB(numberA,numberB){
    return Math.floor(Math.random()*(numberB-numberA)+numberA);
}
console.log("Số ngẫu nhiên từ 10 đến 100 là: "+randomAtoB(10,100));
//Viết hàm tạo mã màu hex ngẫu nhiên
function createColor(){
    let result ='#';
    for(let i = 0;i<6;i++){
    result += Math.floor(Math.random() * 16).toString(16);
    }
    return result;
}
console.log("Tạo mã màu hex ngẫu nhiên: "+createColor());
const c = new Date('2023-12-31').getMonth();
console.log(c);
function findMostCommonCharater(text) {
  //Hello word
  let charCount = {};
  let max = 0;
  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    if (char === " ") {
      continue;
    }
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
    if (charCount[char] > max) {
      max = charCount[char];
    }
  }
  let result = {};
  for (let char in charCount) {
    if (charCount[char] === max) {
      result[char] = charCount[char];
    }
  }
  return result;
}
console.log(findMostCommonCharater("Hello word"));