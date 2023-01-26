var arr=[5,9,8,4,3],len,i,j,temp
len=arr.length
var n=parseInt(len)
 
    for(j=0;j<=(n/2);j++)
    {
        temp=arr[j]
        arr[j]=arr[n-j-1]
        arr[n-j-1]=temp
    }


// for(i=len-1;i>=0;i--){
//     a.push(arr[i]);
// }
 
console.log(arr);
