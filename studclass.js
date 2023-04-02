
class Student{
    constructor(name,age,clas){
        this.Name=name
        this.Age=age
        this.Class=clas
    }
    display(){
        console.log("Name:"+this.Name+",Age:"+this.Age+",class:"+this.Class)
    }
}
s1=new Student("akku",20,"BCA")
s2=new Student("achu",22,"BCA")
s3=new Student("ammu",21,"BCA")
s1.display()
s2.display()
s3.display()
