import '../css/common.css';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
      startBtn: document.querySelector('button[data-start]'),
      input: document.querySelector('#datetime-picker'),
      days: document.querySelector('[data-days]'),
      hours: document.querySelector('[data-hours]'),
      minutes: document.querySelector('[data-minutes]'),
      seconds: document.querySelector('[data-seconds]'),
}


let userselectedDates;
const timer = {
    intervalId: null,
    start() {
      this.intervalId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = userselectedDates - currentTime;
        const time = convertMs(deltaTime);
        
        if (deltaTime > 0) {
          updateClockeFace(time);
        } else { 
          console.log('Should stop now');
          this.stop();
        } 
    }, 1000);
  },

  stop() {
    console.log("stop()", this.intervalId);
    clearInterval(this.intervalId);
  }
};


refs.startBtn.addEventListener('click', () => {
  timer.start();
})


function updateClockeFace({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
  onClose(selectedDates) {
    userselectedDates = selectedDates[0].getTime();
    if (userselectedDates <= Date.now()) {
      refs.startBtn.disabled = true;
      clearInterval(this.intervalId);
      return Notiflix.Notify.failure('Please choose a date in the future');
    } else { 
      refs.startBtn.disabled = false;
    }
    },
};

//Приймає число,приводить до стрінг та добавляє 0,якщо число має 1 число.
function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

 
    const days = pad(Math.floor(ms / day));
    const hours = pad(Math.floor((ms % day) / hour));
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
// Підключити календар  flatpickr
console.log('options', options);
flatpickr('#datetime-picker', options);


// Напиши скрипт таймера, який здійснює зворотний відлік до
//  певної дати.Такий таймер може використовуватися у блогах та
// інтернет - магазинах, сторінках реєстрації подій, під час технічного
// обслуговування тощо.Подивися демо - відео роботи таймера.

// HTML містить готову розмітку таймера, поля вибору кінцевої дати
//  і кнопку, по кліку на яку, таймер повинен запускатися.Додай
//   мінімальне оформлення елементів інтерфейсу.

// Бібліотека flatpickr
// Використовуй бібліотеку flatpickr для того, щоб
// дозволити користувачеві кросбраузерно вибрати кінцеву
// дату і час в одному елементі інтерфейсу.Для того щоб
//  підключити CSS код бібліотеки в проект, необхідно додати ще
//  один імпорт, крім того, що описаний в документації.
// Бібліотека очікує, що її ініціалізують на елементі input[type = "text"],
//     тому ми додали до HTML документу поле input#datetime - picker.

// Описаний в документації
// import flatpickr from "flatpickr";
// // Додатковий імпорт стилів
// import "flatpickr/dist/flatpickr.min.css";