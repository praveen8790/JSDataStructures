function generateRandom(){
    return Math.floor(Math.random() * 1000);
 }

var array = new Array();
for(i=0;i<10;i++){
    array[i] = generateRandom();
    }
console.log(array.sort((a, b) => a - b));
console.log(array[array.length-2]);
console.log(array[2]);