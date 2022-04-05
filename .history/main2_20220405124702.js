
function checkGreater(arr) {
  let index = arr.findIndex((element) => element === n);
  for (let i = index + 1; i < arr.length; i++) {
    if (arr[i] > arr[index]) {
        console.log(arr[index], arr[i]);
        return;
    }
  }
  console.log(-1)
}

const arr = [34, 23, 12, 54, 34, 99, 12, 43];

checkGreater(arr);
