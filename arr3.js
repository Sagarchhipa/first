var arr=[
    {rollno:1,name:'user1',marks:[{science:90,maths:99,physics:96}]},
    {rollno:2,name:'user2',marks:[{science:90,maths:93,physics:96}]},
    {rollno:3,name:'user3',marks:[{science:58,maths:75,physics:80}]},
    {rollno:4,name:'user4',marks:[{science:94,maths:99,physics:70}]},
    {rollno:5,name:'user5',marks:[{science:99,maths:100,physics:99}]},
    {rollno:6,name:'user6',marks:''}
]
//console.log(arr);
arr.forEach(e=>{
    if( e.marks!=undefined){
    console.log(e.marks);
}
})