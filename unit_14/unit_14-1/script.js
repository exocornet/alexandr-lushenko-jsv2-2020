// task 1 --------------------

let a = 4;
let i1 = document.querySelector('.i-1');
let out1 = document.querySelector('.out-1');

function f1 () {
  a = +i1.value;
  let consLog = '';
  if (a === 4) {
    consLog = 'a равно 4';
    out1.classList.add('valid');
    out1.classList.remove('error');
  } else {
    consLog = `a не равно 4 <br> a равно ${a}`;
    out1.classList.add('error');
    out1.classList.remove('valid');
  }

  let prevOut = out1.innerHTML = consLog;
  return [console.log(consLog), prevOut];
}

document.querySelector('.task-1').addEventListener('click', f1);