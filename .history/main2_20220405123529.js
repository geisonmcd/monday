const arr= [34,23,12,54,34,99,12,43]

function checkGreater(n) {

  for (let i = 0; i < arr.length; i++) {
    let index = arr.findIndex(element => element === n);
    console.log(index)
  }
}

checkGreater(34);
