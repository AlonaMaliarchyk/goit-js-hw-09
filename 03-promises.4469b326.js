function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");function l(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(t){t.preventDefault();const{elements:{delay:n,step:o,amount:r}}=t.currentTarget;let s=Number(this.elements.delay.value);const u=Number(this.elements.amount.value),a=Number(this.elements.step.value);for(let t=1;t<=u;t+=1)l(t,s).then((t=>{e(i).Notify.success(`✅ Fulfilled promise ${t.position} in ${t.delay}ms`)})).catch((t=>{e(i).Notify.failure(`❌ Rejected promise ${t.position} in ${t.delay}ms`)})),s+=a}));
//# sourceMappingURL=03-promises.4469b326.js.map
