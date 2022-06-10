console.log(global);
let i = 0;
let interval = setInterval(() => {
  i++;
  console.log(i);
  if (i === 10) {
    clearInterval(interval);
  }
}, 1000);

let inmediate = setImmediate(() => {
  console.log("inmediate");
});
//variables globales
global.miVariable = "Hola";
console.log(global.miVariable);
