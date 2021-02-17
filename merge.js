/* Merge sort takes a divide and conquer approach 
to sorting. It breaks the array down into continually 
smaller chunks, then merges them back together in the 
correct order: */

function mergeSort(array) {
  // array would already be sorted
  if (array.length <= 1) {
    return array;
  }

  // slice the array into two halves
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  // recursively sort the left half and the right half
  left = mergeSort(left);
  right = mergeSort(right);
  // two sorted halves are merged together
  return merge(left, right, array);
}

/* keep choosing the lowest value from the left or right arrays 
that hasn't already been added to the output array. When 1 of the 
arrays is empty, you add all of the remaining values from the other 
array to it.*/
function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};unction merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};