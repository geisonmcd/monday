const arr = [3, 4, 5, 3, 6, 4, 5, -1, 2, 2];
const n = 2;

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

function checkNextNDuplicatesWithSets(arr, n) {
  let elements = new Set();
  let duplicates = new Set();
  for (let element of arr) {
    if (elements.has(element)) {
      duplicates.add(element);
      if (duplicates.size === n) return duplicates;
    } else {
      elements.add(element);
    }
  }
  return duplicates;
}

console.time("1");
console.log(returnDuplicates(arr, 2));
console.timeEnd("1");
console.time("2");
console.log(checkNextNDuplicatesWithSets(arr, 2));
console.timeEnd("2");
