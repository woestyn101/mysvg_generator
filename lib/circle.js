import {Myshape} from './shape.js';



export class Circle extends Myshape {
       constructor(mytextContent, myTextColor, myShapeColor) {
        super(mytextContent, myTextColor, myShapeColor);
            this.circleTag = '<circle cx="150" cy="100" r="80" fill="'+ myShapeColor + '" />';
       }

       render() {
             
               return '<circle cx="150" cy="100" r="80" fill="'+ this.myShapeColor +'" />';
       }

       
        

 
}

var myCircle = new Circle("red", "blue", "orange");
console.log(myCircle.start);
console.log(myCircle.circleTag);
console.log(myCircle.textContent);
console.log(myCircle.render());






