// Bài 3:
// Viết hàm mã hóa văn bản bằng thuật toán Caesar Cipher

// Caesar Cipher là phương pháp mã hóa dịch từng ký tự trong văn bản theo một khoảng cách cho trước.
// Với mỗi ký tự trong chuỗi, thay nó bằng ký tự khác nằm cách nó shift vị trí trong bảng chữ cái.
// Nếu ký tự là chữ hoa thì kết quả cũng phải là chữ hoa, tương tự cho chữ thường.
// Ký tự không phải chữ cái giữ nguyên.
// Hàm nhận vào tham số:
// Chuỗi cần mã hóa
// Shift: Số bước dịch (nguyên dương)
// Kết quả là chuỗi đã được mã hóa.
function isAlphab(char) {
  //a-z A-Z
  return ("a" <= char && char <= "z") || ("A" <= char && char <= "Z");
}
function shiftCharacter(char, shift) {
  //a -z:97 - 122
  //A -Z: 65 - 90
  if (shift === 0) return char;
  let code = char.charCodeAt(0);
  code += shift;
  //Kiểm tra phạm vi
  if (shift > 0) {
    for (let i = 0; i < shift; i++) {
      code++;

      if ("a" <= char && char <= "z" && code > 122) {
        code = 97;
      }
      if ("A" <= char && char <= "Z" && code > 90) {
        code = 65;
      }
    }
  } else {
    code--;
    for (let i = Math.abs(shift); i > 0; i--) {
      if ("a" <= char && char <= "z" && code > 122) {
        code = 97;
      }
      if ("A" <= char && char <= "Z" && code > 90) {
        code = 65;
      }
    }
  }
  return String.fromCodePoint(code);
}
function caesarCipher(arr, shift) {
  let result = "";
  for (let char of arr) {
    //Kiểm tra ký tự chữ cái
    if (!isAlphab(char)) {
      result += char;
    } else {
      result += shiftCharacter(char, shift);
    }
  }
  return result;
}   
console.log(caesarCipher("zZ", 3));
console.log(caesarCipher("zZ", -3));
console.log(caesarCipher('Hello, world!',3));
console.log(caesarCipher('Hello, world!',-3));
