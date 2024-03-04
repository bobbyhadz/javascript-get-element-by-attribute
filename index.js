console.log('bobbyhadz.com');

// ✅ querySelector for single element
const el = document.querySelector('[title="first"]');
console.log(el); // 👉️ div

// ✅ querySelectorAll for all elements matching attribute
const elements = document.querySelectorAll('[class="box"');
console.log(elements); // 👉️ [div.box, div.box]
