function insert(array, rightIndex) {
  // Setting the value of the right index as the key to be compared
  let value = array[rightIndex];
  /**
   * Setting the index to be the right index,
   * If the value is greater than all the items then it will be
   * placed at the right index
   */
  let index = rightIndex;
  /**
   * Setting i as the rightIndex minus(-) 1 as the strting point
   * Otherwise, I will be comparing i to i
   * While i is more than or equal to 0 and value or i is more
   * than value, keep looping left.
   */
  for (let i = rightIndex - 1; i >= 0 && array[i] > value; i--) {
    // Set the index to the current i
    index = i;
    // Shift the item to the right index
    // As a result all items of array will go to the right
    // Which are higher than the key value
    array[i + 1] = array[i];
  }
  // Finally drop the value at the hole index
  array[index] = value;
}

function insertionSort(array) {
  // Start with 1 as the first right index
  for (let i = 1; i < array.length; i++) {
    insert(array, i);
  }

  return array;
}

module.exports = insertionSort;
