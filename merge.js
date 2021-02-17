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

