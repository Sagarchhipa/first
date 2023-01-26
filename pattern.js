var str="",i,j;
for(i=1;i<8;i++)
{
    for(j=1;j<5;j++){
        if(j>=1 && j<=5-i ||j>=1 && j<=i-3){
            str+="*";
        }else{
            str+="-"
        }
    }
    
        str+="\n";
    
}
console.log(str);