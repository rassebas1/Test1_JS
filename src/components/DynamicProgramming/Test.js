function bubble(arr) {
  if (arr.length == 0) return [];

  for (let i = 0; i < arr.length; i++) {
    let aux = arr[i];
    //console.log(aux);
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < aux) {
        arr[i] = arr[j];
        arr[j] = aux;
        aux = arr[i];
      }
    }
  }
  return arr;
}

//console.log(bubble([5, 3, 7, 9]));
//console.log(bubble([5, 2,3, 7, 9]));
//console.log(bubble([5, 3, 7, 4,3,2,9]));
/**
 * entra vector de numeros
 * retorna el numero de veces que aparece el maximo y el minimo
 * args: array of numbers
 * return: array of numbers
 *
 */

function maxMin(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  console.log(max);
  console.log(min);

  let maxCount = 0;
  let minCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == max) {
      max = arr[i];
      maxCount++;
    }
    if (arr[i] == min) {
      min = arr[i];
      minCount++;
    }
  }
  return { max: maxCount, min: minCount };
}
console.log(maxMin([5, 3, 7, 9, 3, 2, 9, 3, 2, 9]));
