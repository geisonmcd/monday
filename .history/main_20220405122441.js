const arr = [3,4,5,3,6,4,5,-1,2,2];
const n = 2;

function returnDuplicates(arr, n) {
    let element;
    let comparisonElement;
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        element = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (i === j) continue
            comparisonElement = arr[j];
            if (element === comparisonElement) {
                if (!duplicates.includes(element)) {
                    duplicates.push(element)
                    if (duplicates.length == n) return duplicates;
                }
            }
        }
    }
    return duplicates;
}

console.log(returnDuplicates(arr, 2))