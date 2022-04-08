//cuadrado

pCuadrado = () => {
  const input = document.getElementById("square-input");
  var ladoCuadrado = input.value;
  console.log(ladoCuadrado * 4);
  return ladoCuadrado * 4;
};
aCuadrado = () => {
  const input = document.getElementById("square-input");
  var ladoCuadrado = input.value;
  console.log(ladoCuadrado * ladoCuadrado);
  return ladoCuadrado * ladoCuadrado;
};

// pCuadrado(ladoCuadrado);
// aCuadrado(ladoCuadrado);
//triangulo
var triangulo = { lado1: 6, lado2: 6, base: 4, altura: 5.5 };
const reducer = (accumulator, curr) => accumulator + curr;
pTriangulo = () => {
  const side1 = Number(document.getElementById("triangle-side1").value);
  const side2 = Number(document.getElementById("triangle-side2").value);
  const base = Number(document.getElementById("triangle-base").value);
  console.log(side1 + side2 + base);
  if (!side1 || !side2 || !base) {
    document.getElementById("error-triangle").textContent = "FaltanCampos";
    return;
  }
  document.getElementById("error-triangle").textContent = "";
  return side1 + side2 + base;
};
aTriangulo = () => {
  const side1 = Number(document.getElementById("triangle-side1").value);
  const side2 = Number(document.getElementById("triangle-side2").value);
  const base = Number(document.getElementById("triangle-base").value);
  if (!side1 || !side2 || !base) {
    document.getElementById("error-triangle").textContent = "FaltanCampos";
    return;
  }
  const s = pTriangulo() / 2;
  Math.sqrt(s * (s - side1) * (s - side2) * (s - base));
  console.log(Math.sqrt(s * (s - side1) * (s - side2) * (s - base)));
  document.getElementById("error-triangle").textContent = "";
  returnMath.sqrt(s * (s - side1) * (s - side2) * (s - base));
};

//circulo
var pi = Math.PI;

pCirculo = () => {
  const radius = Number(document.getElementById("circle-radius").value);
  console.log(radius * 2 * pi);
  return radius * 2 * pi;
};
aCirculo = () => {
  const radius = Number(document.getElementById("circle-radius").value);
  console.log(radius * radius * pi);
  return radius * radius * pi;
};
