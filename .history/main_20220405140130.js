const arr = [3, 4, 5, 3, 6, 4, 5, -1, 2, 2];
const n = 2;

function checkNextNDuplicates(arr, n) {
  let element;
  let comparisonElement;
  let elements = new Set();
  let duplicates = new Set();
  for(let element of arr) {
      if(!elements.add(element)) {
          duplicates.add(element)
      }
  }
//   for (let i = 0; i < arr.length; i++) {
//     element = arr[i];
//     for (let j = 0; j < arr.length; j++) {
//       if (i === j) continue;
//       comparisonElement = arr[j];
//       if (element === comparisonElement) {
//         duplicates.add(element);
//         if (duplicates.size === n) return duplicates;
//         break;
//       }
//     }
//   }
  return elements;
}

console.log(checkNextNDuplicates(arr, n));
