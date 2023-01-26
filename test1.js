var num=1234,S,sum=0
for(var i=num;i>0;i--){
    if(i>0){
       S=parseInt(num%10);
       num=num/10;
       if(S%2==0){
        sum+=S;
       } 
    }
}
console.log(sum);
// S=num.toString(S)
// console.log(S);
// r.push(S.charAt(0));
// r.push(S.charAt(1));
// r.push(S.charAt(2));
// r.push(S.charAt(3));
// r.forEach(e=>{
//     if(e%2==0){
//         sum=sum+e;
//     }
// })

// console.log(r);
// console.log("sum=",sum);