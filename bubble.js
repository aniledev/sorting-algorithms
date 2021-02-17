/* Bubble sort is the classic "terrible" sorting algorithm.
you keep looping through an array to find out whether adjacent 
values need swapping, and you keep going until there are no 
more values that need swapping*/

// function solely for swapping array values at 2 indices
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    // orders the values in terms of lowest to highest value
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
    }
  }

  if (swaps > 0) {
    return bubbleSort(array);
  }
  return array;
}
