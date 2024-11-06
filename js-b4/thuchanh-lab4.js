function repeatString(input) {
  let result = "";
  let dot = "";
  let after = "";
  for (i = 1; i <= 10; i++) {
    result += input;
    result += "-";
  }
  console.log("Chuỗi sau khi tạo bằng: " + result);
}
let a = "m";
repeatString(a);
//cách 2
function repeatString2(str, repeatTime, saperator) {
  let result2 = "";
  for (i = 0; i < repeatTime; i++) {
    result2 += str;
    result2 += "-";
    if (i < repeatTime) {
      result2 += saperator;
    }
  }
  return result2;
}
console.log(repeatString2("Bình", 3, " "));
//B4: tính tổng các số chia hết cho 5
function calcSumDividedBy5(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log("Tong các số chia hêt cho 5: " + calcSumDividedBy5(100));
//Cách 2: clean code
function calcSumDividedBy5(number) {
  let sum = 0;
  for (let i = 5; i <= number; i = i + 5) {
    sum += i;
  }
  return sum;
}
console.log("Tong các số chia hêt cho 5: " + calcSumDividedBy5(100));
//Bài 5
function calcSumInterger(numberA, numberB) {
  let sum = 0;
  if (numberA < numberB) {
    for (i = numberA + 1; i <= numberB - 1; i++) {
      sum += i;
    }
  } else if (numberA == numberB) {
    return 0;
  } else {
    for (i = numberB + 1; i <= numberA - 1; i++) {
      sum += i;
    }
  }
  return sum;
}
console.log("Tong từ 3 đến 8 là: " + calcSumInterger(3, 8));
console.log("Tong từ 8 đến 3 là: " + calcSumInterger(8, 3));
console.log("Tong từ 8 đến 8 là: " + calcSumInterger(8, 8));
//cách 2
function calcSumInterger2(numberA, numberB) {
  let sum = 0;
  //Condition? a: b
  //Nếu condition đúng thì lấy a ko thì lấy b
  let min = numberA < numberB ? numberA : numberB;
  let max = numberA > numberB ? numberA : numberB; //Toan tu 3 ngoi dạng rút gọn của if else
  for (i = min + 1; i <= max - 1; i++) {
    sum += i;
  }
  return sum;
}
console.log("Tống từ 3 đến 8: " + calcSumInterger2(3, 8));
console.log("Tống từ 3 đến 8: " + calcSumInterger2(7, 8));

//Bài 6: Kiểm tra số nguyên tố
function checkPrimeNumbers(number) {
  if (number < 2 && number >= 0) {
    return false;
  } else if (number <= 3) {
    return true;
  } else if (number % 2 == 0 || number % 3 == 0) {
    return false;
  } else {
    for (let i = 5; i * i <= number; i++) {
      if (number % i == 0 || number % (i + 2) == 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}
console.log("Số 100 là số nguyên tố đúng ko? " + checkPrimeNumbers(100));
console.log("Số 3 là số nguyên tố đúng ko? " + checkPrimeNumbers(3));
console.log("Số 359 là số nguyên tố đúng ko? " + checkPrimeNumbers(359));
function sum(sumnumber){
    let calcSum = 0;
    for(let i = 0;i<=sumnumber;i++){
        if(checkPrimeNumbers(i)==true){
            calcSum += i;
        }
    }
    return calcSum;
}
console.log("Tổng các số nguyên tố: "+sum(100));
// //Chia bài
// for(let m = 1;m<=10;m++){
//     console.log("Chia bài lần thứ: "+m);
//     for(let n = 1;n<=3;n++){
//         console.log("Chia bài cho người thức: "+n);
//     }
// }
// function chiaBai(nguoiChoi){
//     for(let i = 1;i<=nguoiChoi;i++){
//         console.log("Chia bài cho người thứ: "+i);
//     }
// }
// for(let j = 1;j<=10;j++){
//     chiaBai(3);
// }