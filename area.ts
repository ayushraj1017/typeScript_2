export {}

//Area using Enums
enum myConstants {
    pi=3.14,
    e=2.73,
    log2=0.3,}
let radius=20;
console.log("circumference");
let c=2*myConstants.pi*radius;
console.log(c);

//class and constructor

class Point{
    private x:number;  //access modifier
    

    constructor(x:number, private y:number){  //no use of this
        this.x=x;
}

     draw(){
        console.log(` X: ${this.x} Y: ${this.y} `);
        
    }

    get X(){
        return this.x;
    }

    set X(value){
        if(value<0){
            throw new Error('error')
        }
        this.x=value;

    }

}

let p=new Point(4,5);   //p is a Object.....which is an instance of a class
// p.x=6;               to prevent this access modifier is used

console.log(p.X); //getter

p.X=10;  //setter
p.draw();


//m=inteface

interface Draw{
    x:number,
    y:number,
    a?:string,
    b?:string,
}

let drawPoint=(d:Draw)=>{
    console.log(`${d.x} ${d.y}`);
    
}

let args={
    x:10,
    y:20,
}

drawPoint(args)








