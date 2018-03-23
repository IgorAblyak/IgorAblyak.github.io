function brainteaser() {
  var counter = 0;
      var startCondition = confirm("Поиграем в загадки ?");
      if (startCondition == true) {
        var brainTeaser1 = prompt("Первая загадка: Плотник острым долотом строит дом с одним окном ?").toLowerCase();
        if (brainTeaser1 == "" || brainTeaser1 == null) {
          alert("Не угадали.");
        }
        else if (brainTeaser1 == "дятел") {
          alert("Верно.");
          counter = counter + 1;
        }
        var brainTeaser2 = prompt("Вторая загадка: Все меня топчут, а я все лучше ?").toLowerCase();
        if (brainTeaser2 == "" || brainTeaser2 == null) {
          alert("Не угадали.");
        }
        else  if (brainTeaser2 == "тропинка") {
          alert("Верно.");
          counter = counter + 1;
        }
        var brainTeaser3 = prompt("Третья загадка: Если б не было его, не сказал бы ничего ?").toLowerCase();
        if (brainTeaser3 == "" || brainTeaser3 == null) {
          alert("Не угадали.");
        }
        else  if (brainTeaser3 == "язык") {
          alert("Верно.");
          counter = counter + 1;
        }
        var brainTeaser4 = prompt("Четвертая загадка: Зубов много, а ничего не ест ?").toLowerCase();
        if (brainTeaser4 == "" || brainTeaser4 == null) {
          alert("Не угадали.");
        }
        else  if (brainTeaser4 == "расческа") {
          alert("Верно.");
          counter = counter + 1;
        }
        var brainTeaser5 = prompt("Пятая загадка: Пять братьев — Годами равные, ростом разные ?").toLowerCase();
        if (brainTeaser5 == "" || brainTeaser5 == null) {
          alert("Не угадали.");
        }
        else  if (brainTeaser5 == "пальцы") {
          alert("Верно.");
          counter = counter + 1;
        }
        alert("Вы угадали " + counter + " загадок");
      }
      alert("До скорой встречи!");
}

function guess() {
  var machineNumber = parseInt(Math.random() * 100);
      if (machineNumber == 99) {
        machineNumber++;
      }
      alert("Нужно угадать число от 0 до 100!");
      while(true) {
        var userNumber = prompt("Введите число. Для выхода нажмите 'q'");
        if (userNumber == "q") {
          break;
        }
        userNumber = parseInt(userNumber);
        if (userNumber < machineNumber) {
          alert("Число должно быть больше!");
        } else if (userNumber > machineNumber) {
          alert("Число должно быть меньше!");
        } else if (userNumber == machineNumber) {
          alert("Вы угадали!");
          break;
        } else {
          alert("Необходимо ввести число!");
        }
      }
}

function guessmulti() {
  var machineNumber = parseInt(Math.random() * 100);
      if (machineNumber == 99) {
        machineNumber++;
      }
      alert("Нужно угадать число от 0 до 100. Игроки должны вводить числа поочередно!");
      var name1 = prompt("Введите имя первого игрока: ");
      var name2 = prompt("Введите имя второго игрока: ");
      var player = name1;
      while(true) {
        var userNumber = prompt(player + " Введите число. Для выхода нажмите 'q'");
        if (userNumber == "q") {
          break;
        }
        userNumber = parseInt(userNumber);
        if (userNumber < machineNumber) {
          alert("Число должно быть больше!");
        } else if (userNumber > machineNumber) {
          alert("Число должно быть меньше!");
        } else if (userNumber == machineNumber) {
          alert("Вы угадали! Выиграл " + player);
          break;
        } else {
          alert("Необходимо ввести число!");
        }

        if (player == name1) {
          player = name2;
        } else {
          player = name1;
        }
      }
}