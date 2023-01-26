var Data1=[
    {product:[{productname:['proname','proname2','proname3']},
               {productrate:[20,40,30]},
               {productquantity:[100,400,230]}
            ]}
],len,Data2=Array();

Data1.forEach(e=>{
    if (e.product!=undefined) {
       e.product.forEach(e1=>{
        if(e1.productname!=undefined){
         Data2.push( e1.productname);
         len=e1.productname.length
        }else  if(e1.productrate!=undefined){
            Data2.push( e1.productrate);
           }else  if(e1.productquantity!=undefined){
            Data2.push( e1.productquantity);
           }
       })
    
    }
})

console.log("ProductName   ProductRate   ProductQuantity");
for(var i=0;i<len;i++){
    console.log(`${Data2[0][i]} \t ${Data2[1][i]} \t\t ${Data2[2][i]}  `);

}
//console.log(Data1);
// Data1.forEach(e=>{
//     e.product.forEach(k=>{
//         console.log(k.productname);
//     })
    
// })
// Data1.forEach(e=>{
//     console.log("productname||productrate||productqty");
//     e.product.forEach(e2=>{
       
//          if(e2.productname!=undefined){
//          console.log(e2.productname[0],e2.productrate[0]);
//          console.log(e2.productname[1]);
//          console.log(e2.productname[2]);
//     }
//     else if(e2.productrate!=undefined){
//         console.log(e2.productrate[0]);
//     }
//     })
    
// })


// Data1.forEach(e=>{
//         e.product.forEach((e2,index,arr)=>{
//            if(e2.productname!=undefined){
//                Data2.push(e2.productname)
//            }   
//         })       
// }) 
// console.log(Data2);          
            //  console.log(e2.productname[1]);
            //  console.log(e2.productname[2]);
        
        // else if(e2.productrate!=undefined){
        //     console.log(e2.productrate[0]);
         
    

    
