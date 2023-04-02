class Main{
    
    constructor(a){
        this.age=a
        
    }
    name="akku"
    fun(){
        console.log(this.name)
    }
}
ob=new Main(21)
console.log(ob.age)
ob.fun()
ob2=new Main(22)
console.log(ob2.age)