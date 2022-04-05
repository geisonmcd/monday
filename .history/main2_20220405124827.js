function checkGreater(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; i++) {
      if (i === j) continue;
      if (arr[i] > arr[index]) {
        console.log(arr[index], arr[i]);
        return;
      }
    }
  }
  console.log(-1);
}

const arr = [34, 23, 12, 54, 34, 99, 12, 43];

checkGreater(arr);
