export {};// as not to be treated as script make it as model
let s="ff";
console.log(s);
enum Color {Red,Blue}

let newcolor :Color = Color.Blue;
console.log(newcolor);
 let newData :any = 11;
 console.log(typeof( newData))


 let knowValue:unknown = "dd" // like "any" type but to reassign  values to string .. must make some effort 
 // act like string have to redeclear as string 

 //factory function
function fucAdd (first :number,second? :number) : {}{ // return type object
    return {first,second}; // shortcut for   return { first: first, second: second };
}
console.log(fucAdd(2,3));
//{ first: 2, second: 3}
console.log(fucAdd(2));
//{ first: 2, second: undefined }
//////////////////////////////////// objects
// 
interface person {
    name :string, 
    age? :number
}
function addName(person : person){ //instead of declering the object create interface
    console.log(`${person.name} ${person.age}`)
}
let personObj = {
    name : "Alaa",
    age :200
}
addName(personObj);

////////////////////
class Human {
    //private humanName; // can be seen only in this class
    //public humanName; // can be seen any where 
    protected humanName; // can be sen only in class and child 
    constructor(name){
        this.humanName =name;
    }
    echoName (){
        console.log(`hello ${this.humanName}`)
    }
}
class Develoer extends Human {
    constructor (name){
        super (name); // to passs name value to human object
    }
    dev(){
        //console.log(this.humanName)// can't be availble if humanName private
        console.log("developer name :"+this.humanName)
    }
}

let developer =new Develoer("hussein");

developer.dev();
developer.echoName();
//developer.humanName //not working if protected or private




