// let arr=[
//   {
//     "id": 1,
//     "product": "Laptop",
//     "price": 1200
//   },
//   {
//     "id": 2,
//     "product": "Headphones",
//     "price": 200
//   }
// ]
// let priceSum=0;
// for(let i=0;i<arr.length;i++)
// {
//     priceSum=priceSum+arr[i].product;
// }
//   console.log(priceSum);   



// callback function
// first class function
// higher order fn0
// return functon





function sum(cb) {
    console.log("this is sum");

    console.log(cb);

    return 20;
}




sum(function (num) {
    console.log('this from function', num);
    return 100
})



let arr = [
    {
        "id": 1,
        "product": "Laptop",
        "price": 1200
    },
    {
        "id": 2,
        "product": "Headphones",
        "price": 200
    }
]
let fun = function () {
    let priceSum = 0;
    for (let i = 0; i < arr.length; i++) {
        priceSum = priceSum + arr[i].product;
    }
    return priceSum;
}
console.log(fun());