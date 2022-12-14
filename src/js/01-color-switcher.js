import '../css/common.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let timerId = null;
let isActive = false;

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', () => {
    if (isActive) {
      return;
  };
  btnStart.disabled = true;
  btnStop.disabled = false;
    isActive = true;
        timerId = setInterval(() => {
        const color = getRandomHexColor();
        body.style.backgroundColor = color;
    }, 1000);
    
});

btnStop.addEventListener('click', () => {
    clearInterval(timerId);
  isActive = false;
  btnStart.disabled = false;
  btnStop.disabled = true;
})


// Завдання 1 - перемикач кольорів

//HTML містить кнопки «Start» і «Stop».

{/* <button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>

Напиши скрипт, який після натискання кнопки «Start», раз на секунду 
змінює колір фону <body> на випадкове значення, використовуючи інлайн 
стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна
 зупинятися.

УВАГА
Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість 
разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була 
неактивною (disabled).

Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
} */}