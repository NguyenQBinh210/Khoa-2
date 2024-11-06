//Bai1
// Viết một chương trình JavaScript để tính số tiền lãi bạn sẽ nhận được khi gửi một khoản tiết
// kiệm trong một khoảng thời gian nhất định.
// Khai báo các biến:
// - Số tiền gửi ban đầu (số nguyên dương)
// - Lãi suất hàng năm (phần trăm, số thực dương)
// - Số tháng gửi (số nguyên dương)
// In ra: Số tiền lãi nhận được
// Ví dụ:
// - Số tiền gửi ban đầu: 10.000.000đ
// - Lãi suất hàng năm: 0.07 (7%)
// - Số tháng gửi: 6
// Kết quả: Số tiền lãi nhận được là 350.000đ

let letMoney = 10_000_000;
let annualInterestRate = 0.07;
let letMonth = 6;
let interest = ((letMoney * annualInterestRate) / 12) * letMonth;
console.log("Bài 1: Số tiền lãi nhận được là: " + interest + " VND");

//Bai 2
// Viết một chương trình JavaScript để tính số tiền cuối cùng phải trả khi mua một món đồ sau khi
// áp dụng thuế giá trị gia tăng (VAT).
// Khai báo các biến:
// - Giá gốc của món đồ (số nguyên dương)
// - Phần trăm thuế VAT (số thực dương)
// In ra: Số tiền cuối cùng cần phải thanh toán
// Ví dụ:
// - Giá gốc của món đồ: 1.500.000đ
// - Phần trăm thuế VAT: 0.1 (10%)
// Kết quả: Tổng số tiền phải thanh toán là 1.650.000đ
let price = 1500000;
let vatPercentage = 0.1;
let afterPriceVAT = price + price * vatPercentage;
console.log(
  "Bài 2: Tổng số tiền phải thanh toán là: " + afterPriceVAT + " VND"
);

//BÀi 3
function tinhcv(a,b){
  console.log('Tong cong viec = '+(a/b));
  console.log('So luong con lai: '+a%b);
}
let workNeeded = 53;
let employees = 5;
let numberOfJobsOneEmployee = Math.floor(workNeeded / employees);
let remainingWork = workNeeded % employees;
console.log(
  "Bài 3: Số lượng công việc mỗi nhân viên làm : " + numberOfJobsOneEmployee
);
console.log("Số lượng công việc còn lại: " + remainingWork);
tinhcv(workNeeded,employees);

//Bài 4:
let timeExercise = 45;
let caloriesPerMinute = 8.5;
let sumCaloresAfterExcercise = timeExercise * caloriesPerMinute;
console.log("Bài 4: Tổng calo tiêu thụ: " + sumCaloresAfterExcercise + " calo");

//Bài 5
let weight = 68;
let height = 1.75;
let bmi = weight / (height * height);
let bmi2 = bmi.toFixed(2); //Lấy 2 số sau phần thập phân
console.log("Bài 5: Chỉ số BMI là: " + bmi2);









