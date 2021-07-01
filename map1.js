function dieRoll(){
    return (Math.floor(Math.random() * 10)%6) + 1;
}
function check(){
    for(let [key,value] of dieMap){
        if(value >= 10){
            console.log("maximum no.of entries are for "+key);
            return false;
        }
    }
    return true;
}

var dieMap = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);
while(check()){
    let die= dieRoll();
    dieMap.set(die,dieMap.get(die)+1);
}
for(let [key,value] of dieMap){
    console.log("key "+key+"  "+ "value "+value);
}
