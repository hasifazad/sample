// find largest number in an array 

function largestElement(arr) {
    let largestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
}

// find the smallest number in an array 

function smallElement(arr) {
    let smallNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallNum) {
            smallNum = arr[i];
        }
    }
    return smallNum;
}

// print array in reverse order 

function arrayRev() {
    for (let i = 1; i < arr.length; i++) {
        arrElement=arr[i];
    }
}

let arr = [20, 45, 75, 48,71, 22, 12, 40];
console.log("The largest element in the array is:", largestElement(arr));
console.log("The largest element in the array is:", smallElement(arr));
// console.log("Array in reverse order:", arrayRev(arr));
