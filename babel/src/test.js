function parent () {
     this.name="parent";
     this.getName=function(){
        return this.name;
     }
     this.setName=function(name){
        this.name=name;
     }
}

var p=new parent();
console.log(p.getName());
function child(){

}
child.prototype=p;
var c1=new child();
var c2=new child();
console.log(c1.getName())
console.log(c2.getName())
c1.setName('child');
console.log(c1.getName())
console.log(c2.getName())
