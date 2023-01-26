var arr=[
     {id:1,name:'user1'},
     {id:2,name:'user2'},
     {id:3,product:[{productid:1,productname:'phone'}]}

]
//console.log(arr);
arr.forEach(e=>{
    if(e.product!= undefined){
    console.log(e.product[0].productid);}

})