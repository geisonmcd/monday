const arr= [34,23,12,54,34,99,12,43]

function returnDuplicates(arr, n) {
  let element;
  let comparisonElement;
  let duplicates = new Set();
  for (let i = 0; i < arr.length; i++) {
    element = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      comparisonElement = arr[j];
      if (element === comparisonElement) {
        duplicates.add(element);
        if (duplicates.size === n) return duplicates;
        break;
      }
    }
  }
  return duplicates;
}

console.log(returnDuplicates());
