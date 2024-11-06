// //Chi co if
// if (condition) {
// }
// //Co if - else
// if (condition) {
//   //Chay code o day neu condition = true
//   if (otherCondition) {
//     //Chay duoc o day neu dk dau dung
//   } else {
//   }
// } else if (otherCondition) {
//   //Chay code o day neu otherCondition = true;
// } else {
//   //Chay code o day neu toan bo dk la false
// }

const battery = 10;
if (battery <= 20) {
  console.log("Pin yeu! Vui long sac pin");
}
const rain = true;
if (rain == true) {
  console.log("Duoc nghi hoc");
} else {
  console.log("Di hoc binh thuong");
}

const age = 15;
if (age < 3) {
  console.log("Duoc mien phi tien!");
} else if (3 <= age && age < 6) {
  console.log("Giam 80% vao cua");
} else if (6 <= age && age < 12) {
  console.log("Giam 20% vao cua");
} else {
  console.log("No free");
}

const lightTraffic = "yellow";
const isCrossTheLine = false;
if (lightTraffic == "red") {
  console.log("Dung lai");
} else if (lightTraffic == "yellow" && isCrossTheLine) {
  console.log("Di tiep");
} else if (lightTraffic == "yellow" && !isCrossTheLine) {
  console.log("Dung lai");
} else {
  console.log("Di thoi");
}

//Toi uu code hon
//Den do => dung
//Den xanh => di
//Den vang
// - Da qua vach => Di tiep
// - Chua qua vach => Di cham va dung lai
// switch () {
//   case 1:
//     console.log("Di");
//     break;
//   case 1:
//     console.log("Di");
//     break;
//   default:
//     console.log("Di");
//     break;
// }
//Dinh dang thu trong tuan
const today = 2;
switch (today) {
  case 2:
    console.log("Hom nay la thu 2");
    break;
  case 3:
    console.log("Hom nay la thu 3");
    break;
  case 4:
    console.log("Hom nay la thu 4");
    break;
  case 5:
    console.log("Hom nay la thu 5");
    break;
  case 6:
    console.log("Hom nay la thu 6");
    break;
  case 7:
    console.log("Hom nay la thu 7");
    break;
  default:
    console.log("Hom nay la chu nhat");
    break;
}
