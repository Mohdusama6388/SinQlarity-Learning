// object type
let num:{x:number;y:number}={x:1,y:4};
console.log(num);

//optional properties
let num1:{x:number;y?:number}={x:1};
console.log(num1);

//Interfaces
//an interfaces declaration is another way to name an object type 
interface Point{
    x:number;
    y:number;

}
let p1:Point={x:100,y:100};
 //type alias
 type MyPoint={
    x:number;
    y:number;
 }
 let p2:MyPoint={x:100,y:100};
 //difference between type alias and interface

 //-- union type
 let id:number|string=2;
 let x: string[] | string =["@","e"];
 //-- mapped types
 type onlyBoolsAndHorses={
    [key:string]:boolean | "Horse";
 };
    const conforms:onlyBoolsAndHorses={
        del:true,
        rodney:false,
        x:"Horse"
    };


 //class check
 const classcheck=() =>{
    //.. case 1, now not work in latest version ,initialization is mandatory
    class point{
        // x:number;
        // y:number;
        x:number=0;
        y:number=0;
    }
    const pt=new point();
    // pt.x=1;
    //pt.y=2;
    console.log(pt);
    // NO error ,either you assing value or not 
    //End case 1
    //--case 2
    class Point1{
        x=0;
        y=0;
    }
    const pt1=new Point1();
    pt1.x=1;
    pt1.y=2;
    console.log(pt1);
    // Type will be decided with initialization in class
    // End case2
    //..case3 
    class Point2{
        x:number;
        constructor(n: number){
            this.x=n;
        }
    }
    const pt2=new Point2(3);
    console.log(pt2);
// end case3
// case 4 Getter/Setters
class student{
    private _name:string="";
    private _standard:Number=0;
    get name():string{
        return this._name;
    }
    set name(value:string){
        this._name=value;

    }
    get standard(): Number {
        return this._standard;
 }
    set standard(value:Number){
        this._standard=value
    }  
 }
let usama=new student();
usama.name="usama"
usama.standard=10;
console.log("usama",usama);
// End case 4

}
classcheck();

 

  
