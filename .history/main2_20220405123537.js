const arr= [34,23,12,54,34,99,12,43]

function checkGreater(n) {

    let index = arr.findIndex(element => element === n);
  for (let i = 0; i < arr.length; i++) {

    console.log(index)
  }
}

checkGreater(34);
