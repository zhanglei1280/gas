THREE.Tester = function(name, age){
    this.name = name
    this.age = age

    this.sayHello = function(){
        alert("Hello"+this.name+this.age)
    }
}
