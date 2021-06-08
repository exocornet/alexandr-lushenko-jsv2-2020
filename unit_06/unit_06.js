//  Task 1
// С помощью вложенных циклов, нарисуйте строку:
//
// ***_***_***_
//
// где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.

function t1() {
  let divOut1 = document.querySelector('.out-1');
  let div1 = '';

  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
      div1 += `*`;
    }
    div1 += `_`;
  }

  divOut1.innerHTML = div1;
}

document.querySelector('.b-1').onclick = t1;


//  Task 2
// С помощью вложенных циклов, нарисуйте строку:
//
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
//
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.

function t2() {
  let divOut2 = document.querySelector('.out-2');
  let data2 = '';

  for (let i = 0; i < 3; i++) {
    data2 += `${i + 1}<br>`;

    for (let k = 0; k < 3; k++) {
      data2 += `*_`;
    }

    data2 += `<br>`;
  }

  divOut2.innerHTML = data2;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// С помощью вложенных циклов, нарисуйте строку:
//
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
//
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.

function t3() {
  let divOut3 = document.querySelector('.out-3');
  let div3 = '';

  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
      div3 += `*_`;
    }
    div3 += `<br>`;
  }

  divOut3.innerHTML = div3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// С помощью вложенных циклов, нарисуйте строку:
//
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
//

function t4() {
  let divOut4 = document.querySelector('.out-4');
  let div4 = '';

  for (let i = 0; i < 3; i++) {
    div4 += `${i+1}_`;
    for (let k = 0; k < 5; k++) {
      div4 += `${k+1} `;
    }
    divOut4.innerHTML = div4;
  }
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// С помощью вложенных циклов, нарисуйте строку:
//
// 101010
// 101010
// 101010
//
// Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.

function t5() {
  let divOut5 = document.querySelector('.out-5');
  let div5 = '';

  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 6; k++) {
      if (k%2 === 0) {
        div5 += '1';
      } else {
        div5 += '0';
      }
    }
    div5 += '<br>';
  }

  divOut5.innerHTML = div5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// С помощью вложенных циклов, нарисуйте строку:
//
// 10x01x
// 10x01x
// 10x01x
//
// Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.

function t6() {
  let divOut6 = document.querySelector('.out-6');
  let div6 = '';

  for (let i = 0; i < 3; i++) {
    for (let k = 1; k <= 6; k++) {
      if (k === 2 || k === 4) {
        div6 += '0';
      } else if (k === 1 || k === 5) {
        div6 += '1';
      } else if (k === 3 || k === 6) {
        div6 += 'x';
      }
    }
    div6 += '<br>';
  }

  divOut6.innerHTML = div6;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// С помощью вложенных циклов, нарисуйте строку:
//
// *
// **
// ***
// ****
//
// Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.

function t7() {
  let divOut7 = document.querySelector('.out-7');
  let div7 = '';

  for (let i = 0; i < 4; i++) {
    for (let k = 0; k <= i; k++) {
      div7 += `*`;
    }
    div7 += '<br>';
  }

  divOut7.innerHTML = div7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// С помощью вложенных циклов, нарисуйте строку:
//
// *****
// ****
// ***
// **
// *
//
// Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки.

function t8() {
  let divOut8 = document.querySelector('.out-8');
  let div8 = '';

  for (let i = 5; i > 0; i--) {
    for (let k = 1; k <= i; k++) {
      div8 += '*';
    }
    div8 += '<br>';
  }

  divOut8.innerHTML = div8;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// С помощью вложенных циклов, нарисуйте строку:
//
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
//
// Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры.

function t9() {
  let divOut9 = document.querySelector('.out-9');
  let div9 = '';

  for (let i = 1; i <= 5; i++) {
    for (let k = 1; k <= i; k++) {
      div9 += `${[k]} `;
    }
    div9 += '<br>';
  }

  divOut9.innerHTML = div9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// С помощью вложенных циклов, нарисуйте строку:
//
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
//
// Внешний цикл выводит перенос строки br и запускается от 0 до 6.
// Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.

function t10() {
  let divOut10 = document.querySelector('.out-10');
  let div10 = '';

  for (let i = 0; i < 6; i++) {
    for (let k = 0; k <= 9; k++) {
      if (i === 0) {
        if (k+1 < 10) {
          div10 += `${i}${k+1} `;
        } else {
          div10 += `${(k+1)+(i*10)} `;
        }
      } else {
        div10 += `${(k+1)+(i*10)} `;
      }
    }
    div10 += '<br>';
  }

  divOut10.innerHTML = div10;
}

document.querySelector('.b-10').onclick = t10;