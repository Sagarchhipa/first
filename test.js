var A=[5,9,8,3,4,5],E=Array();O=Array();R=Array();
A.forEach(e=>{
    if(e%2==0)
    {
        E.push(e);
        
    }else{
        O.push(e);
        
    }
})
console.log(E);
console.log(O);
E.forEach(e=>{
    R.push(e);
})
O.forEach(e=>{
    R.push(e);
})
console.log(R);

