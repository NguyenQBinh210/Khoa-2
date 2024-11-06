//Kiểm tra dãy tăng dần
function checkArrAsc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
const arr12 = [1, 2, 6, 7, 9];
const arr13 = [1, 5, 4, 7, 9];
const arr14 = [10, 20, 32, 12, 40, 50, 60, 70];
console.log(checkArrAsc(arr12));
console.log(checkArrAsc(arr13));
console.log(checkArrAsc(arr14));
// //Kiểm tra mảng có phải số chẵn tăng dần ko
// function checkEvenArrAsc(arr) {
//   for (let x = 0; x < arr.length - 1; x++) {
//     if (arr[x] % 2 == 1) {
//       return false;
//     }
//   }
//   for (let y = 0; y < arr.length - 1; y++) {
//     if (arr[y] > arr[y + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// const arr15 = [2,4,6,8,10,12];
// const arr16 = [2,4,6,7,10,12];
// console.log(checkEvenArrAsc(arr15));
// console.log(checkEvenArrAsc(arr16));

// Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào
// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []
    function getElementGreater(arr,number){
        let variable = [];
        for(let k = 0;k<arr.length-1;k++){
            if(arr[k] > number){
                variable.push(arr[k]);
            }
        }
        return variable;
    }
    console.log(getElementGreater([1, 2, 3, 4, 5], 3));
    console.log(getElementGreater([1, 2, 3, 4, 5], 5));

