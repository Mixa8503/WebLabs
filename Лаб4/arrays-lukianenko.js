let sortButton = document.querySelector("#sort");
const result = document.querySelector(".result");
let elements = document.querySelector("#elements").value

function toArray(str) {
    let numberArray = String(str).split(',').map(x => parseInt(x));
    return numberArray;
}

function findMaxEven(arr) {
    let maxEven = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] > maxEven) {
            console.log(i);
            maxEven = arr[i]
        }
    }
    return maxEven
}

function findMinEven(arr) {
    let minEven = Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] < minEven) {
            minEven = arr[i]
            console.log("cycle goes");
        }
    }
    return minEven
}

function sortArray(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }
}


function task2() {
    let array = toArray(elements)
    let minEven = array.indexOf(findMinEven(array))
    let maxEven = array.indexOf(findMaxEven(array))
    console.log(minEven,maxEven);
    let temp = array[minEven]
    array[minEven] = array[maxEven]
    array[maxEven] = temp
    result.innerHTML = `<br>smallest and biggest swapped : [13,8,26,14,111]`
    sortArray(array)
    result.innerHTML += `<br>array sorted : [8,13,14,26,111]`
}
