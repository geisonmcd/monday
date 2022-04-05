function checkGreater(arr) {
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[j] > arr[i]) {
        console.log(arr[i], "->", arr[j]);
      }
    }
  }
  console.log(-1);
}

const arr = [34, 23, 12, 54, 34, 99, 12, 43];

checkGreater(arr);
