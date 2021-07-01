function month(){
    return (Math.floor(Math.random() * 10)%12) + 1;
}

var monthMap = new Map();
for(var i=1;i<=12;i++){
    monthMap.set(i,0);
}
var i=0;
while(i<51){
    var value = month();
    monthMap.set(value,monthMap.get(value)+1);
    i++;
}
for(let [key,value] of monthMap){
    console.log("people born in month "+key+" are "+value);
}