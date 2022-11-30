let str="naman"
let rev = 0

for(let i=str.length-1; i>=0; i--){
    rev = rev + str[i]
}

if(rev=str){
    console.log("Yes");
}else{
    console.log("No");
}