// Quicksort again uses a divide and conquer approach.
function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  // partition the array into halves around a pivot value
  const middle = partition(array, start, end);
  /* values less tha pivot go to one half and greater than 
    go to the other half. recursively sort until the halves 
    have length -0 or 1*/
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

// A common in-place algorithm is Lomuto's algorithm
function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}
