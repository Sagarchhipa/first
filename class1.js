class Demo
{
    constructor(name){
        this.name=name
    }
    get=()=>{
        console.log(`person name is:${this.name}`);
    }
}
var R=new Demo('ram');
R.get();
 