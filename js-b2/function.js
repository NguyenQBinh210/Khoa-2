function sumColumn(a,b){
    c = a + (a*b);
    //console.log("Gia sau thue: "+c);
    return a * (1+b/100);
}
console.log(sumColumn(100_000,0.2));
console.log(sumColumn(2_000_000, 10));

//Tính BMI
function calcBMI(weight,height){
    return weight / (height*height);
}
console.log(calcBMI(58,1.74));
console.log(calcBMI(70,1.75));//Nhảy vào trong hàm và thực thi các lệnh 
//Cách hđ: thực hiện từ trên xuống dưới
//Gặp hàm thì sẽ nhảy vào trong hàm trước thực thi xong hàm rồi mới tiếp tục các câu lệnh tiếp theo
//Gọi là luồng điều khiển chương trình
function sayHello(name){
    console.log('Hello ' + name);
    console.log("Hello "+ name);
    console.log(`hello ${name}`);
    return;//undefined
}
sayHello('Bình');
sayHello("Bình");