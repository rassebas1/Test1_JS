function isPair(number) {
  return number % 2 === 0;
}

function calcAverage(array) {
  const arraySum = array.reduce(function (accumulator = 0, element) {
    return accumulator + element;
  });
  const average = arraySum / array.length;
  return average;
}

// Calculadora de mediana
function medianItem(array) {
  const half = parseInt(array.length / 2);

  if (isPair(array.length)) {
    const itemHalf1 = array[half - 1];
    const itemHalf2 = array[half];

    const mediana = calcAverage([itemHalf1, itemHalf2]);
    return mediana;
  } else {
    const itemHalf = array[half];
    return itemHalf;
  }
}

// Mediana General
const salariosCol = colombia.map(function (personita) {
  return personita.salary;
});

const salariosColSorted = salariosCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

const medianaGeneralCol = medianItem(salariosColSorted);
const mediaGeneral = calcAverage(salariosColSorted);
// Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianItem(salariosColTop10);
let serchValue = document.getElementById("search").textContent;
const filter = colombia.includes(() => {});
function renderList(array) {
  const list = document.getElementById("list");
  list.innerHTML = array.map((item) => {
    return `<div data-class:"users"</div>${item.name}</div>
    <div>${item.salary}</div>`;
  });
}
renderList(colombia);
console.log({
  medianaGeneralCol,
  medianaTop10Col,
  mediaGeneral,
});
