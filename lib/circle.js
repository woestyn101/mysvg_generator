import {Myshape} from './shape.js';



export class Circle extends Myshape {
       constructor(mytextContent, myTextColor, theShapeColor){
        super(mytextContent, myTextColor);
         this.circleTag = '<circle cx="150" cy="100" r="80" fill="'+ theShapeColor + '" />';
       }
        

 
}

var myCircle = new Circle("red", "blue", "orange");
console.log(myCircle.start);
console.log(myCircle.circleTag);
console.log(myCircle.textContent);






