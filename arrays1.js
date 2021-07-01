function generateRandom(){
   return Math.floor(Math.random() * 1000);
}
function secondLargest(arr){
    var largest=second=0;
    for (i = 0;i<arr.length;i++){
        if (arr[i]>largest){
            largest = arr[i];
        }
    }
    for (i = 0 ;i<arr.length;i++){
        if (arr[i]>second && arr[i]<largest){
            second = arr[i];
        }
    }
    return second;
}
function secondSmallest(arr){
    var smallest=second;
    for (i = 0;i<arr.length;i++){
        if (arr[i]<smallest){
            smallest = arr[i];
        }
    }
    for (i = 0 ;i<arr.length;i++){
        if (arr[i]<second && arr[i]>smallest){
            second = arr[i];
        }
    }
    return second;
}


var array = new Array();
for(i=0;i<10;i++){
    array[i] = generateRandom();
    }
console.log(array);
console.log(secondLargest(array));
console.log(secondSmallest(array));
