import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

function createPromise(position, delay) {
      const promice = new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
      })
  return promice;
};

refs.form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;

  let deleyStep = Number(this.elements.delay.value); 
  const amountNum = Number(this.elements.amount.value);
  const stepNum = Number(this.elements.step.value);
  
  for (let i = 1; i <= amountNum; i += 1) {
    createPromise(i, deleyStep)
      .then(value => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${value.position} in ${value.delay}ms`);
      }
    ).catch(error => {
        Notiflix.Notify.failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
    });
    deleyStep += stepNum;
  }
  refs.form.reset();
}