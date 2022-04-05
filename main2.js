function printNextGreaterThanNumber(arr) {

  let found;
  for (let i = 0; i < arr.length; i++) {
    found = false;
    for (let j = i+1; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[j] > arr[i]) {
        console.log(arr[i], "->", arr[j]);
        found = true;
        break;
      }
    }
    if (!found) console.log(arr[i], '->' , -1)
  }
}

const arr = [34, 23, 12, 54, 34, 99, 12, 43];

printNextGreaterThanNumber(arr);
