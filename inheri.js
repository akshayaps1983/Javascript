
class Parent{
    fun(){
        console.log("parent method")
    }
}
    class  Chilld extends Parent{
    name="child"
}
c=new Chilld()
console.log(c.name)
c.fun()