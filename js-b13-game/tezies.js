document.addEventListener("DOMContentLoaded", () => {
  function randomDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  const dices = [
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
  ];
  //Lay nhung phan tu van thiet
  const container = document.querySelector(".dice-container");
  const btnStart = document.querySelector("#btnNewGame");
  const btnRoll = document.querySelector("#btnRoll");
  const currentRollDisplay = document.querySelector(".dice-score");
  const bestRollDisplay = document.querySelector(".best-score");
  const currentTimeDisplay = document.querySelector(".dice-time");
  const bestTimeRoll = document.querySelector(".best-time");
  // const rollTime = document.querySelector(".dicetime .value");
  // let time = 0;
  //Khi dem, can bien du lieu de roll
  let rollCount = 0;
  let isWin = false;
  let timer;
  let elapsedTime = 0;
  let bestRoll = localStorage.getItem("bestRoll") || null;
  let bestTime = localStorage.getItem("bestTime") || null;
  // let count = 0; bestCount = 0, bestTime = 0;

  if (bestRoll) bestRollDisplay.textContent = bestRoll;
  if (bestTime) bestTimeRoll.textContent = formatTime(bestTime);

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  function renderDices() {
    container.innerHTML = "";
    // rollCount.textContent = '';
    dices.forEach((dice, index) => {
      const div = document.createElement("div");
      div.classList.add("dice");
      div.textContent = dice.values;
      if (dice.isFrozen) {
        div.classList.add("frozen");
      }
      div.addEventListener("click", () => {
        if (!isWin) {
          dice.isFrozen = !dice.isFrozen;
          div.classList.toggle("frozen");
        }
      });
      container.appendChild(div);
    });
    //Hàm kiểm tra trạng thái thắng
    if (checkWin()) {
      isWin = true;
      btnStart.style.display = "block";
      btnRoll.style.display = "none";
      clearInterval(timer);
      playWinSound();
       // animate();
      if (!bestRoll || rollCount < bestRoll) {
        bestRoll = rollCount;
        bestRollDisplay.textContent = bestRoll;
        localStorage.setItem("bestRoll", bestRoll);//Tự động chuyển thành chu
      }
      if (!bestTime || elapsedTime < bestTime) {
        bestTime = elapsedTime;
        bestTimeRoll.textContent = formatTime(bestTime);
        localStorage.setItem("bestTime", bestTime);
      }
    }
  }
  //Âm thanh khi win (hiệu ứng)
  function playWinSound() {
    const winSound = new Audio("marimba-win-f-2-209688.mp3");
    winSound.play();
  }
  //Xử lý sự kiện
  btnStart.addEventListener("click", () => {
    isWin = false;
    // count = 0;
    //time  = 0;
    rollCount = 0;
    elapsedTime = 0;
    currentRollDisplay.textContent = rollCount;
    currentTimeDisplay.textContent = formatTime(elapsedTime);

    dices.forEach((dice) => {
      dice.values = randomDice();
      dice.isFrozen = false;
    });
    btnStart.style.display = "none";
    btnRoll.style.display = "block";
    // rollCount.textContent =count;
    clearInterval(timer);
    timer = setInterval(() => {
      //Lưu trữ cho 1 chức năng lặp lại
      elapsedTime++;
      currentTimeDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
    renderDices();
  });

  btnRoll.addEventListener("click", () => {
    if (!isWin) {
      dices.forEach((dice) => {
        if (!dice.isFrozen) {
          dice.values = randomDice();
        }
      });
      // count++;
      //rollCount.textContent=count;
      rollCount++;
      currentRollDisplay.textContent = rollCount;
      renderDices();
    }
  });
  // Hàm kiểm tra thắng
  function checkWin() {
    return dices.every(
      (dice) => dice.isFrozen && dice.values === dices[0].values
    );
  }
  // function animate(){
  //   tsParticles.load({
  //     id: "tsparticles",
  //     options: {
  //       fullScreen: {
  //         zIndex: 1,
  //       },
  //       particles: {
  //         number: {
  //           value: 0,
  //         },
  //         color: {
  //           value: ["#00FFFC", "#FC00FF", "#fffc00"],
  //         },
  //         shape: {
  //           type: ["polygon", "emoji"],
  //           options: {
  //             polygon: [
  //               {
  //                 sides: 5,
  //               },
  //               {
  //                 sides: 6,
  //               },
  //             ],
  //             emoji: {
  //               particles: {
  //                 size: {
  //                   value: 8,
  //                 },
  //               },
  //               value: ["💩", "🤡", "🍀", "🍙", "🦄", "⭐️"],
  //             },
  //           },
  //         },
  //         opacity: {
  //           value: {
  //             min: 0,
  //             max: 1,
  //           },
  //           animation: {
  //             enable: true,
  //             speed: 2,
  //             startValue: "max",
  //             destroy: "min",
  //           },
  //         },
  //         size: {
  //           value: {
  //             min: 2,
  //             max: 4,
  //           },
  //         },
  //         links: {
  //           enable: false,
  //         },
  //         life: {
  //           duration: {
  //             sync: true,
  //             value: 5,
  //           },
  //           count: 1,
  //         },
  //         move: {
  //           enable: true,
  //           gravity: {
  //             enable: true,
  //             acceleration: 10,
  //           },
  //           speed: {
  //             min: 10,
  //             max: 20,
  //           },
  //           decay: 0.1,
  //           direction: "none",
  //           straight: false,
  //           outModes: {
  //             default: "destroy",
  //             top: "none",
  //           },
  //         },
  //         rotate: {
  //           value: {
  //             min: 0,
  //             max: 360,
  //           },
  //           direction: "random",
  //           move: true,
  //           animation: {
  //             enable: true,
  //             speed: 60,
  //           },
  //         },
  //         tilt: {
  //           direction: "random",
  //           enable: true,
  //           move: true,
  //           value: {
  //             min: 0,
  //             max: 360,
  //           },
  //           animation: {
  //             enable: true,
  //             speed: 60,
  //           },
  //         },
  //         roll: {
  //           darken: {
  //             enable: true,
  //             value: 25,
  //           },
  //           enable: true,
  //           speed: {
  //             min: 15,
  //             max: 25,
  //           },
  //         },
  //         wobble: {
  //           distance: 30,
  //           enable: true,
  //           move: true,
  //           speed: {
  //             min: -15,
  //             max: 15,
  //           },
  //         },
  //       },
  //       emitters: {
  //         life: {
  //           count: 0,
  //           duration: 0.1,
  //           delay: 0.4,
  //         },
  //         rate: {
  //           delay: 0.1,
  //           quantity: 150,
  //         },
  //         size: {
  //           width: 0,
  //           height: 0,
  //         },
  //       },
  //     },
  //   });
    
  // }
  renderDices();
});

//Đếm số lần roll(reset khi start game)
//Âm thanh khi win (hiệu ứng)
//Thời gian chơi (setInterval)
//lịch sử (giữ lại kể cả khi reload trang- local storage)

// //Thực hiện chức năng sau 1 khoảng thời gian nhưng lặp lại
// let timerId = setInterval(fn, time);
// crearInterval(timerId); //Dừng lặp lại
// //Thực hiện chứ năng sau một khoảng thời gian
// let timerId2 = setTimeout(fn, time);
// clearTimeout(timerId2);
